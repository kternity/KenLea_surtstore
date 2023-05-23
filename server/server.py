from flask import Flask, request
import json
from mock_data import catalog
from config import db
from flask_cors import CORS

app = Flask("server")
CORS(app) #disable CORS to allow request from any origin

@app.get("/")
def home():
    return "hello from flask"



@app.get("/about")
def about():
    return "About Kenneth Chung"

@app.get("/user")
def user():
    return "User"


@app.get("/orders")
def orders():
    return "Orders"


# CATALOG API 

@app.get("/api/version")
def version():
   version = {
        "V":"V.1.0.1",
        "name":"Candy",
        "yourzip":"your",
   }
   return json.dumps(version)


@app.get("/api/catalog")
def get_catalog():
    cursor = db.products.find({})
    results = []
    for prod in cursor:
        prod["_id"] = str(prod["_id"]) 
        results.append(prod)

    return json.dumps(results)


#save products
@app.post("/api/catalog")
def save_product():
    product = request.get_json()
    db.products.insert_one(product)

    product["_id"] = str(product["_id"]) # clean the objectID from the obj

    return json.dumps(product)


@app.get("/api/catalog/<category>")
def get_by_category(category):
    cursor = db.products.find({"category": category})
    results = []
    for prod in cursor:
        prod["_id"] = str(prod["_id"])
        results.append(prod)

    return json.dumps(results)


@app.get("/api/catalog/search/<title>")
def search_by_title(title):
    cursor = db.products.find({"title": {"$regex": title, "$options": "i"} })
    results = []
    for prod in cursor:
        prod["_id"] = str(prod["_id"])
        results.append(prod)

    return json.dumps(results)



@app.get("/api/product/cheaper/<price>")
def search_by_price(price):
    cursor = db.products.find({})
    result = []
    for prod in cursor:
        if prod["price"] < float(price):
            prod["_id"] = str(prod["_id"])
            result.append(prod)
    
    return json.dumps(result)


@app.get("/api/product/count")
def count_products():
    count = db.products.count_documents({})
    return json.dumps(count)



@app.get("/api/product/cheapest")
def get_cheapest():
    cursor = db.products.find({})
    answer = cursor[0]
    for prod in cursor:
        if prod["price"] < answer["price"]:
            answer = prod
    
    answer["_id"] = str(answer["_id"])
    return json.dumps(answer)


@app.get('/test/numbers')
def get_numbers():
   result = []
   for n in range(1,21):
       if n != 13 and n != 17:
           result.append(n)

   return json.dumps(result)



# create endpoint for UserAccounts
# get all users


@app.get("/api/user")
def get_user():
    cursor = db.user.find({})
    results = []
    for user in cursor:
        user["_id"] = str(user["_id"]) 
        results.append(user)

    return json.dumps(results)

# save user
@app.post("/api/user")
def save_user():
    user = request.get_json()
    db.user.insert_one(user)
    user["_id"] = str(user["_id"]) # clean the objectID from the obj
    return json.dumps(user)


# validate login
@app.post("/api/auth")
def auth():
    # data should have
    # email and password
    data = request.get_json()
    email = data["email"]
    password = data["password"]

    user = db.user.find_one({"email":email, "password": password})
    if user is None:
        return ({"status":"failed", "message": "Invalid credentials"})

    user["_id"] = str(user["_id"]) # clean the objectID from the obj
    return ({"status":"success", "message": "Valid credentials", "user": json.dumps(user)})    


# FE - axios should send a POST rquest with the user object





# Save Cart to server #
@app.get("/api/cart")
def get_cart():
    cursor = db.cart.find({})
    results = []
    for cart in cursor:
        cart["_id"] = str(cart["_id"]) 
        results.append(cart)

    return json.dumps(results)

# save cart
@app.post("/api/cart")
def save_cart():
    cart = request.get_json()
    db.cart.insert_one(cart)
    cart["_id"] = str(cart["_id"]) 
    return json.dumps(cart)



# Display all Results
@app.get("/api/cart")
def get_order():
    cursor = db.cart.find({})
    results = []
    for order in cursor:
        order["_id"] = str(order["_id"])
        results.append(order)

    return json.dumps(results)




app.run(debug=True)