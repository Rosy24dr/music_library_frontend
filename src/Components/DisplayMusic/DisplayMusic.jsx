import React from "react";
import './DisplayMusic.css'

const DisplayMusicTable = (props) => {
  return (
    <div>
      <h2>Music Library</h2>
      <table>
        <tbody className="container-fluid">
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
            <th>Like</th>
            <th>Image</th>
          </tr>
          {props.songs.map((song) => (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.release_date}</td>
              <td>{song.genre}</td>
              <td>{song.likes}</td>
              <td><a href= ""><img src={song.image_link} target="-blank" alt="Images of the songs"/></a></td>
            </tr>
          ))};
        </tbody>
      </table>
    </div>
  );
};

export default DisplayMusicTable;
