import "./search.css"
import {React, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const SearchPage = () => {
    const {inserted_search} = useParams();
    const return_link = () =>{
        let text = document.createElement("a");
        text.textContent = "link";
        text.href="http://localhost:3000/"
        document.body.appendChild(text);
    }
    //retrieve all data from the pages that contain the inserted keyword
    const find_keyword = async (search) => {
        const found_keywords = await axios.get("http://localhost:9000/keyword_search?inserted_keyword=\"" + search + "\"");
        const found_data = found_keywords.data;
        return found_data;
    }
    useEffect(()=>{
        find_keyword(inserted_search).then(data =>{
            console.log(data)
        });
    })
    return(
        <div>
            <p>search page</p>
        </div>
    );
}
export default SearchPage;