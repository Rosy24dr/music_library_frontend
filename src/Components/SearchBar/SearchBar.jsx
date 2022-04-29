import React, { useState} from "react";
import "./SearchBar.css"


const SearchBar = (props) => {
  const [search, setSearch] = useState("");


  let handleChange = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
    props.filtered(lowerCase)
  };

  return (
    <form >
        <div >
        <div>
            <input
                type="text"
                placeholder="Enter Text"
                value={search}
                onChange={handleChange}
                className="searchInput"
            />
        </div>
        <button className="searchButton" type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchBar;

