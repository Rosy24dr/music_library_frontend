import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic"

function App() {

  const [songs,setSongs]=useState([])
  useEffect(() => {
    getAllSongs();
  },[]);

  async function getAllSongs(){
    let response = await axios.get("http://127.0.0.1:8000/api/song/")
    setSongs(response.data)
  }

  return (
    <div>
      <header >
        <DisplayMusic songs={getAllSongs}/>
      </header>
    </div>
  );
}

export default App;


