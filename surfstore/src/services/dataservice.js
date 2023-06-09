import axios from 'axios';

const catalog = [
     {
      "title": "Board 1",
      "category": "Short",
      "price": 12.99,
      "image": "board_01.webp",
      "_id": "asdlkhg1123j1"
   },
   {
      "title": "Board 2",
      "category": "Short",
      "price": 12.99,
      "image": "board_02.webp",
      "_id": "asgdlkh1123j2"
   },
   {
      "title": "Board 3",
      "category": "Short",
      "price": 12.99,
      "image": "board_03.webp",
      "_id": "asdlkh11g23j3"
   },
   {
      "title": "Board 4",
      "category": "Medium",
      "price": 12.99,
      "image": "board_04.webp",
      "_id": "asdlkh1123gj4"
   },  {
      "title": "board 5",
      "category": "Medium",
      "price": 12.99,
      "image": "board_05.webp",
      "_id": "asdlkh1123fgj5"
   },
   {
      "title": "Board 6",
      "category": "Medium",
      "price": 12.99,
      "image": "board_06.webp",
      "_id": "asdlkh1123jg6"
   },
   {
      "title": "Board 7",
      "category": "Long",
      "price": 12.99,
      "image": "board_07.webp",
      "_id": "asdlkh1123j7"
   },
   {
      "title": "Board 8",
      "category": "Short",
      "price": 12.99,
      "image": "board_08.webp",
      "_id": "asdlkh11233j8"
   },
   {
      "title": "Board 9",
      "category": "Medium",
      "price": 12.99,
      "image": "board_09.webp",
      "_id": "asdlkh1323j9"
   },
   {
      "title": "Board 10",
      "category": "Long",
      "price": 12.99,
      "image": "board_10.webp",
      "_id": "asdlkh51123j10"
   },
   {
      "title": "Board 9",
      "category": "Long",
      "price": 12.99,
      "image": "board_11.webp",
      "_id": "asdlksh1123j"
   },
   {
      "title": "Board 10",
      "category": "Medium",
      "price": 12.99,
      "image": "board_12.webp",
      "_id": "asdlnkh1123j"
   },
];

class DataService {

      SERVERURL = "http://127.0.0.1:5000";

   async getCatalog() {
      let response = await axios.get(this.SERVERURL + "/api/catalog");
      return response.data;
   }

   async saveCart(order) {
      let response  = await axios.post(this.SERVERURL + "/api/cart", order);
      return response.data;
   }

   async getOrders() {
      let response  = await axios.get(this.SERVERURL + "/api/cart");
      return response.data;
   }

   
   async saveUser(user) {
      let response  = await axios.post(this.SERVERURL + "/api/user", user);
      return response.data;
   }

   async auth(user) {
      let response = await axios.post(this.SERVERURL + "/api/auth", user);
      return response.data;
   }
}
export default DataService;
