import "./search.css"
import {React, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const SearchPage = () => {
    const navigate  = useNavigate();
    let {inserted_search} = useParams();
    //generate links & description through a array containing all the saved data about the page 
    const generate_links = (pages_array) =>{
        //generate a "not found" message if nothing has been found with the given keyword
        if(pages_array.length === undefined){
            let not_found_message = document.createElement("p")
            not_found_message.textContent = "Sorry, nothing has been found."
            document.body.appendChild(not_found_message);
        }
        else{
            //generate links if the array is not empty
            for(const array_index in pages_array){
                //generate link
                let new_link = document.createElement("a");
                new_link.id = "page_" + array_index.toString();
                new_link.textContent = pages_array[array_index]["title"];
                new_link.href=pages_array[array_index]["url"];
                document.body.appendChild(new_link);
                //spacing between link and description
                let br_spacing = document.createElement("br");
                document.body.appendChild(br_spacing);
                //generate description about the page
                let page_description = document.createElement("label");
                page_description.for = "page_" + array_index.toString();
                page_description.id = "page_" + array_index.toString() + "_description";
                page_description.textContent = pages_array[array_index]["description"];
                document.body.appendChild(page_description);
                //spacing between description and next page
                br_spacing = document.createElement("br");
                document.body.appendChild(br_spacing);
                br_spacing = document.createElement("br");
                document.body.appendChild(br_spacing);
            }
        }
    }
    //retrieve all data from the pages that contain the inserted keyword
    const find_keyword = async (search) => {
        const found_keywords = await axios.get("http://localhost:9000/keyword_search?inserted_keyword=\"" + search + "\"");
        const found_data = found_keywords.data;
        return found_data;
    }
    useEffect(()=>{
        
        //reload page and search after user press "enter"
        document.getElementById("search_bar_2").addEventListener("keydown", function(e){
            if(e.code==="Enter"){
                //this try catch block is needed because sometimes there was a error that it wouldn't be possible to read the value inside "search bar", this try/catch block was made to prevent that from happening
                try{inserted_search = document.getElementById("search_bar_2").value;}
                catch{return 0;}
                console.log('a')
                navigate(`/search/${[inserted_search]}`)
                window.location.reload();
                };
        })
        //call of the function to generate the found pages
        find_keyword(inserted_search).then(data =>{
            //initial spacing between search bar and generated links
            for(let i =0; i < 6; i++){
                let br_spacing = document.createElement("br");
                document.body.appendChild(br_spacing);    
            }
            //generate the links
            generate_links(data)
        });
    })
    return(
        <div>
            <input type="text" id="search_bar_2"></input>
        </div>
    );
}
export default SearchPage;