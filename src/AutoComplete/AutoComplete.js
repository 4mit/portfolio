import React, { useState } from "react";
// import Axios from "axios";
import BASE_URL from "./Constant";
import mockApi from '../Helper/mockApi'

const AutoComplete = (props) => {
  let [searchText, setSearchText] = useState("");
  let [apiData, setApiData] = useState("");

  const getApiData = (searchtext) => {
    let origin = BASE_URL;
    let endpint = `searchText=${searchtext}&limit=${10}`;

     mockApi(`${origin}${endpint}`)
      .then(data=>{
        setApiData(data);
      })
      .catch(err=>{
        console.log('Something went Wrong ...')  
      })

  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    let searchText = e.target.value;
    setSearchText(searchText);
    
    if (searchText && searchText.length >= 3) {
      getApiData(searchText);
    } else {
      setApiData([]);
    }
  };

  return (
    <div className="wrapper">
      <input
        type="text"
        placeholder="Search ..."
        value={searchText}
        onChange={(e) => handleSearch(e)}
      />

      {apiData && apiData.length &&
        apiData.map((d) => {
          return (
            // assuming text in response
            <li key={d.text}>{d.text}</li>
          );
        })}
        {/* // No result found message */}
    </div>
  );
};

export default AutoComplete;
