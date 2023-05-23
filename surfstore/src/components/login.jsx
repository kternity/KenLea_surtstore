import './login.css';
import React, { useState } from "react";
import DataService from '../services/dataservice';

const Login = (props) => {
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(email);
      console.log(pass);
      let user = { "email": email, "password": pass }


      // build an object that contains email and password
      let service = new DataService();
      // create a instansce (and import) data saervice
      let result = await service.auth(user)
      // call the saveUser method
      console.log(result);
      if (result.status == "success") {
         alert("Login successful!");
      }
      else {
         alert("Login unsuccessful!");
      }

   }


   return (
      <div className="auth-form-container">
         <h2>Login</h2>
         <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your e-mail" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log in</button>
         </form>
         <label>Log in</label>
         <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
      </div>
   )
}

export default Login;