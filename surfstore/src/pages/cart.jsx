import "./cart.css";
// import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import DataContext from "../store/dataContext";
import DataService from '../services/dataservice';

function Cart() {
   const cart = useContext(DataContext).cart;
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');


   const handleSubmit = async (e) => {
      let order = { email: email, products: cart }
      console.log(email);
      let service = new DataService();
      let result = await service.saveCart(order)
      console.log(result);
      alert("Order Submitted Successfully!");
   }



   return (
      <div className="cart">
         <h4>You have {cart.length} products in the cart</h4>
         {cart.map((prod) => (
            <div className="prod-row">
               <img src={'/images/' + prod.image} alt=""></img>
               <h6>{prod.title}</h6>
               <label>{prod.price}</label>
               <button className='btn btn-sm btn-danger'>Remove</button>
               <br></br><br></br>
            </div>

         ))}
         <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your e-mail" id="email" name="email" />


            <br></br><br></br>
            <button onClick={handleSubmit} className='btn btn-primary' to="/order">submit</button>

         </div>
      </div>
   );
}

export default Cart;