import React, { useState } from "react";
import './login.css';

const Register = (props) => {
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState(''); 
   const [name, setName] = useState(''); 

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
      console.log(pass);
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
         <button type="submit">Log in</button>

      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
   </div>   
      )
}

export default Register;