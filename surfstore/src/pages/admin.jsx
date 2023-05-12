import "./admin.css";
import Login from "../components/login";
import Register from "../components/register";
import React, { useState } from "react";



function Apps() {   
   const [currentForm, setCurrentForm] = useState('login');

   const toggleForm = (formName) => {
      setCurrentForm(formName);
   }

   return (
      <div className="Apps">
         {
            currentForm == "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
         }
      </div>
   );
}

export default Apps;


// function Admin() {
//    return (
//       <div className="admin">
//          <h1>Store Administration</h1>

//          <div className="parent">
// {/* <AdminProducts></AdminProducts>
// <AdminCouponCodes></AdminCouponCodes> */}

//          </div>
//       </div>
//    );
// }

// export default Admin;