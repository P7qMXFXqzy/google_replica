import "./login.css"
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    
    let inserted_user = null;
    const navigate  = useNavigate();
    //first step for login (check if user exists in database)
    const login_step_1 = async () =>{
        inserted_user = document.getElementById("email_input").value;
        const found_user = await axios.get("http://localhost:9000/login_username?inserted_user=" + inserted_user);
        //if user has been found, hide error message and all elements for user insert and show elements for password insert
        if(found_user.data === true){
            document.getElementById("error_text").textContent = "";
            document.getElementById("email_input").hidden = true;
            document.getElementById("next_button_username").hidden = true;
            document.getElementById("password_input").hidden = false;
            document.getElementById("next_button_password").hidden = false;
        }
        //show error message if the user hasn't been found in the database
        else{document.getElementById("error_text").textContent = "User not found!";}
    }

    //check if the inserted password is correct, redirect to main page if yes, show error message if not
    const login_step_2 = async () => {
        const inserted_password = document.getElementById("password_input").value;
        const password_check = await axios.get("http://localhost:9000/login_password?inserted_user=" + inserted_user + "&inserted_password=" + inserted_password);
        if(password_check.data === true){
            navigate(`/index/${[inserted_user]}/${[inserted_password]}`);
        }
        else{
            document.getElementById("error_text").textContent = "Incorrect password!";            
        }
    }
    
    return (

        <div>
            <input type="text" className = "inputs" id="email_input" placeholder="Email or phone"></input>
            <input type="password" className = "inputs" id="password_input" placeholder="Password" hidden></input>
            <p id="error_text"></p>
            <button className = "next_button" id="next_button_username" onClick={login_step_1}>Next</button>
            <button className = "next_button" id="next_button_password" onClick={login_step_2} hidden>Next</button>
        </div>
    );
  }
export default LoginPage;
