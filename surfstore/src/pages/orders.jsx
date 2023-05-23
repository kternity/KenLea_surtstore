import './orders.css';
import { useContext, useState, useEffect } from "react";
import DataService from '../services/dataservice';
import Cart from './cart';

function Orders() {
   const [orders, setOrders] = useState([]);
   const [products, setProducts] = useState([]);


   useEffect(function () {
      loadData();
   }, []);

   async function loadData() {
      console.log("Active Orders Loaded");
      let service = new DataService();
      let orderList = await service.getOrders();
      let products = new DataService();
      setOrders(orderList);
      console.log(orderList);
   }


   return (

      <div className="orders">
         <h2>Here are your active orders</h2>
         {orders.map(order =>
            <div>
               <b>{order.email} has {order.products.length} products </b>
               <ul className="bullets">
                  {order.products.map(product => <li>{product.title} - ${product.price}</li>)}
               </ul>
            </div>
         )
         }
      </div >
   );
}

export default Orders;