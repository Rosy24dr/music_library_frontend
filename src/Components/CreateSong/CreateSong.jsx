import React, {useState} from "react";
import axios from "axios";


const CreateSong = (props) => {
    const [title, setTitle]= useState('')
    const [artist, setArtist]= useState('')
    const [album, setAlbum]= useState('')
    const [release_date, setReleaseDate]= useState('')
    const [genre, setGenre]= useState('')

    function handlesubmit(event){
        event.preventDefault();
        let newSong ={
            title: title, 
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre,
        };
        console.log(newSong);
        props.createSong(newSong)
    }
    return(
        <form onSubmit={handlesubmit}>
            <p>Add song:</p>
            <div>
                <label>Title:</label>
                <input 
                type="text"
                value={title}
                placeholder="Enter title"
                onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div>
                <label>Artist:</label>
                <input 
                type="text"
                value={artist}
                placeholder="Enter artist"
                onChange={(event) => setArtist(event.target.value)}
                />
            </div>
            <div>
                <label>Album:</label>
                <input 
                type="text"
                value={album}
                placeholder="Enter album"
                onChange={(event) => setAlbum(event.target.value)}
                />
            </div>
            <div>
                <label>Release date:</label>
                <input 
                type="date"
                value={release_date}
                placeholder="Enter release date"
                onChange={(event) => setReleaseDate(event.target.value)}
                />
            </div>
            <div>
                <label>Genre:</label>
                <input 
                type="text"
                value={genre}
                placeholder="Enter genre"
                onChange={(event) => setGenre(event.target.value)}
                />
            </div>
            <button>Submit</button>

        </form>
    );
};

export default CreateSong; 