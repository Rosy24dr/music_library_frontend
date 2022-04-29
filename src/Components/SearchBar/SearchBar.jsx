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
        <span >
        <span>
            <input
                type="text"
                placeholder="Search Here"
                value={search}
                onChange={handleChange}
                className="searchInput"
            />
        </span>
        {/* <button className="searchButton" type="submit">Search Here</button> */}
      </span>
    </form>
  );
};

export default SearchBar;

