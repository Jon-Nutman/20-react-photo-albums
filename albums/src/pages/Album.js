import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'


export default function Album(props) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/albums")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data", data);
        setAlbums(data);
      });
  }, []);
  return (
    <div>
        <ul>
           <Link to={`/detail/${albums.id}`}>{albums.map(album => <li key={album.id}> <img  src={album.thumbnail} alt="Logo" /> {album.name} </li>)}</Link>
        </ul>
    </div>
  )}