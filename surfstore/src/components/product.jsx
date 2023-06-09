import './product.css';
import QuantityPicker from './quantityPicker';
import { useEffect, useState, useContext } from 'react';
import Cart from "../pages/cart";
import DataContext from '../store/dataContext';

function Product (props) {
   const [quantity, setQuantity] = useState(1)

   let addProductsToCart = useContext(DataContext).addProductsToCart;

   function onQuantityChange(qty){
      console.log("new value:" + qty);
      setQuantity(qty);
   }

   function getTotal() {
      let total = props.data.price * quantity;
      return total.toFixed(2);
   }
   
   function handleAdd(){
      console.log("Botton clicked!", props.data);
      addProductsToCart(props.data);
   }

   function addProduct() {
   console.log("Adding " + quantity + " " + props.data.title)
   }

   return (
      <div className="product">
         <img src={"/images/" + props.data.image} alt=""></img>
         <h5>{props.data.title}</h5>
            <div className="prices">
               <label> ${props.data.price.toFixed(2)}</label>
               <label> ${getTotal()}</label>
            </div>

            <div className="controls">
               <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
               <button onClick={handleAdd} className='btn btn-sm btn-outline-primary'>Add</button>      
            </div>
      </div>
   );
}

export default Product;
