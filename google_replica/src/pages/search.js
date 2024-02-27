import "./search.css"
import React from 'react';
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';

const SearchPage = () => {
    const {inserted_search} = useParams();
    const return_p = () =>{
        let text = document.createElement("a");
        text.textContent = "link";
        text.href="http://localhost:3000/"
        document.body.appendChild(text);
    }
    return_p();
    return(
        <div>
            <p>search page</p>
        </div>
    );
}
export default SearchPage;