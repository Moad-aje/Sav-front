import React from 'react';
import './Register.css';


const Register = () => {

	return (
		<div className="box" action="index.html" method="post">
		  <h1>Register</h1>
		  <input type="text" name="" placeholder="Username"/>
		  <input type="text" name="" placeholder="Email"/>
		  <input type="password" name="" placeholder="Password"/>
		  <input type="password" name="" placeholder="Repat Password"/>
		  <input type="submit" name="" value="Register"/>
        </div> 
       
	)
}
export default Register;