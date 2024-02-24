import "./first_page.css"
function FirstPage() {
    return (
        <div>
            <img src={require("./images/logo.png")} id="logo" alt=""></img>
            <input type="text" id="search_bar"></input>
            <p id="country_text">Brasil</p>
            <a class="lower_redirecters" id="about_redirect" href="https://about.google/?utm_source=google-BR&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
            <a class="lower_redirecters" id="advertising_redirect" href = "https://www.google.com/intl/en_br/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1" >Advertising</a>
            <a class="lower_redirecters" id="business_redirect" href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1" >Business</a>
            <a class="lower_redirecters" id="business_redirect" href="https://google.com/search/howsearchworks/?fg=1">How Search Works</a>
            <a class="lower_redirecters" id="privacy_redirect" href="https://policies.google.com/privacy?hl=en-BR&fg=1">Privacy</a>
            <a class="lower_redirecters" id="terms_redirect" href="https://policies.google.com/terms?hl=en-BR&fg=1" >Terms</a>
            <p class="lower_redirecters" id="settings_clickable_text">Settings</p>
            <a class="upper_redirecters" id="gmail_redirecter" >Gmail</a>
            <a class="upper_redirecters" id="images_redirecter" >Images</a>
            <button class="search_buttons" id="search_button" >Google Search</button>
            <button class="search_buttons" id="lucky_button" >I'm Feeling Lucky</button>
            <button id="apps_button">
                <img id="apps_image" src={require("./images/apps_button_image.png")} alt=""></img>
            </button>
            <button id="sign_button" >Sign in</button>
        </div>
    );
  }
  
export default FirstPage;
  