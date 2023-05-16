import "./cart.css";
import {Link} from 'react-router-dom';
import { useContext, useState } from "react";
import DataContext from "../store/dataContext";

function Cart() {
      const cart = useContext(DataContext).cart;
   return ( 
      
      <div className="cart">
      <h4>You have {cart.length} products in the cart</h4>
       {cart.map((prod)=>(
            <div className="prod-row">
               <img src={'/images/'+ prod.image} alt=""></img>
               <h6>{prod.title}</h6>
               <label>{prod.price}</label>
               <button className='btn btn-sm btn-danger'>Remove</button>
               <br></br><br></br>
            </div>

         ))}
      <div>
      <Link className='btn btn-primary' to="/catalog">Check Out</Link>
      </div>
      </div>
   );
}

export default Cart;