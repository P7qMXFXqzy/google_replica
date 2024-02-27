import "./first_page.css"
import {React, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const FirstPage = () => {
    const navigate  = useNavigate();
    const {user, password} = useParams();
    let {inserted_search} = useParams();
    useEffect(()=>{
        //hide button if user has made a login previously
        if(({user}["user"] !== undefined && {password}["password"] !== undefined) && ({user}["user"] !== "undefined" && {password}["password"] !== "undefined")){
            document.getElementById("sign_button").hidden = true;
        }
        //redirect to search page after the user press "enter"
        document.getElementById("search_bar").addEventListener("keydown", function(e){
            if(e.code==="Enter"){
                //this try catch block is needed because sometimes there was a error that it wouldn't be possible to read the value inside "search bar", this try/catch block was made to prevent that from happening
                try{inserted_search = document.getElementById("search_bar").value;}
                catch{return 0;}
                navigate(`/search/${[inserted_search]}`)
                };
        })
    });

    const redirect_to_login = () => {
        navigate("/login");
    }

    return (
        <div>
            <img src={require("./images/logo.png")} id="logo" alt=""></img>
            <input type="text" id="search_bar"></input>
            <button id="sign_button" onClick={redirect_to_login}>Sign in</button>
        </div>
    );
    
  }
  
export default FirstPage;
  