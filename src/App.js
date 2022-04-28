import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import SearchBar from "./Components/SearchBar/SearchBar";
import CreateSong from "./Components/CreateSong/CreateSong";

function App() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/song/");
    setSongs(response.data);
  }

  function filteredMusic(props) {
    const filteredData = songs.filter((song) => {
      if (song.title.toLowerCase().includes(props)) {
        return song;
      } else if (song.artist.toLowerCase().includes(props)) {
        return song;
      } else if (song.album.toLowerCase().includes(props)) {
        return song;
      } else if (song.release_date.toLowerCase().includes(props)) {
        return song;
      } else if (song.genre.toLowerCase().includes(props)) {
        return song;
      }
    });
    setSongs(filteredData);
  }

  function addNewSong(entry) {
    let tempEntries = [...songs, entry];
    setSongs(tempEntries);
  }

  return (
    <div>
      <header>
        <SearchBar searchBar={songs} filtered={filteredMusic} />
        <CreateSong createSong={addNewSong}/>
        <DisplayMusic songs={songs} displayMusic={getAllSongs} />
      </header>
    </div>
  );
}

export default App;
