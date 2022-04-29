import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import SearchBar from "./Components/SearchBar/SearchBar";
import CreateSong from "./Components/CreateSong/CreateSong";


function App() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([])
  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/song/");
    setSongs(response.data);
    setFilteredSongs(response.data)
  }

  async function addNewSong(entry) {
    let response = await axios.post("http://127.0.0.1:8000/api/song/", entry);
      getAllSongs()
  }


  function filteredMusic(props) {
    const filteredData = songs.filter((song) => {
      if (song.title.toLowerCase().includes(props)) {
        return true;
      } else if (song.artist.toLowerCase().includes(props)) {
        return true;
      } else if (song.album.toLowerCase().includes(props)) {
        return true;
      } else if (song.release_date.toLowerCase().includes(props)) {
        return true;
      } else if (song.genre.toLowerCase().includes(props)) {
        return true;
      }else if (song.image_link.includes(props)) {
        return true;
      }
    });
    setFilteredSongs(filteredData);
  }
  return (
    <div className="background">
      <header>
        <SearchBar searchBar={songs} filtered={filteredMusic} />
        <DisplayMusic songs={filteredSongs} displayMusic={getAllSongs}  />
        <CreateSong createSong={addNewSong}/>
      </header>
    </div>
  );
}

export default App;
