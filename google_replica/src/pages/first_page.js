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
            <p id="country_text">Brasil</p>
            <a className="lower_redirecters" id="about_redirect" href="https://about.google/?utm_source=google-BR&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
            <a className="lower_redirecters" id="advertising_redirect" href = "https://www.google.com/intl/en_br/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1" >Advertising</a>
            <a className="lower_redirecters" id="business_redirect" href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1" >Business</a>
            <a className="lower_redirecters" id="search_works_redirect" href="https://google.com/search/howsearchworks/?fg=1">How Search Works</a>
            <a className="lower_redirecters" id="privacy_redirect" href="https://policies.google.com/privacy?hl=en-BR&fg=1">Privacy</a>
            <a className="lower_redirecters" id="terms_redirect" href="https://policies.google.com/terms?hl=en-BR&fg=1" >Terms</a>
            <p className="lower_redirecters" id="settings_clickable_text">Settings</p>
            <a className="upper_redirecters" id="gmail_redirecter" >Gmail</a>
            <a className="upper_redirecters" id="images_redirecter" >Images</a>
            <button className="under_search_buttons" id="gs_button" >Google Search</button>
            <button className="under_search_buttons" id="lucky_button" >I'm Feeling Lucky</button>
            <button id="apps_button">
                <img id="apps_image" src={require("./images/apps_button_image.png")} alt=""></img>
            </button>
            <button id="sign_button" >Sign in</button>
            <button className = "search_buttons" id="microphone_button">
                <img id="microphone_image" src={require("./images/microphone.png")} alt=""></img>
            </button>
            <button className = "search_buttons" id="camera_button">
                <img id="camera_image" src={require("./images/camera.png")} alt=""></img>
            </button>
        </div>
    );
    
  }
  
export default FirstPage;
  