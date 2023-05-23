import React, { useState } from "react";
import './login.css';
import DataService from '../services/dataservice';

const Register = (props) => {
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState(''); 
   const [name, setName] = useState(''); 

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(name);
      console.log(email);
      console.log(pass);
   let user = {"name": name, "email":email, "password":pass}

   
      // build an object that contains email and password
      let service = new DataService();
      // create a instansce (and import) data saervice
      let result = await service.saveUser(user)
      // call the saveUser method
      console.log (result);
      alert ("User information saved!");
}




   return (
      <div className="auth-form-container">
         <h2>Register</h2>
      <form form className="register-form" onSubmit={handleSubmit}>
         <label htmlFor="name">Full name</label>
         <input value={name} onChange={(e) => setName(e.target.value)} id="name" name="name"placeholder="full name" />
         <label htmlFor="email">email</label>
         <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your e-mail" id="email" name="email" />
         <label htmlFor="password">password</label>
         <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
         <label>Log in</label>
         <button type="submit">Save</button>

      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
   </div>   
      )
}

export default Register;