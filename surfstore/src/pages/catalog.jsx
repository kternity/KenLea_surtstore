import { useEffect, useState } from 'react';
import Product from "../components/product";
import DataService from '../services/dataservice';
import "./catalog.css";

function Catalog() {
   const [products, setProducts] = useState([]);
   useEffect(function () {
      loadData();
   }, []);

   async function loadData() {
      console.log("catalog loaded");
      let service = new DataService();
      let prodList = await service.getCatalog();
      setProducts(prodList);
   }


   return (
      <div className="catalog">
         <h3>Ken & Lea's Surfboard Store</h3>
         <h5>We have {products.length} latest surfboards for you!</h5>
         <div className="products">
            {products.map(prod => <Product data={prod} />)}
         </div>
      </div>
   );
}

export default Catalog;