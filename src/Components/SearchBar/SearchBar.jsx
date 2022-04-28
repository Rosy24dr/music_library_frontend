import React, { useState} from "react";
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = (props) => {
  const [search, setSearch] = useState("");


  let handleChange = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
    props.filtered(lowerCase)
  };

  return (
    <form action="/" method="get">
        <div>
            <div>
        <input
            type="text"
            placeholder="Enter Text"
            value={search}
            onChange={handleChange}
        />
        <div><SearchIcon/></div>
        </div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchBar;

