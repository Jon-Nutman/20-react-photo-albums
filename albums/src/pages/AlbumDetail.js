import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'


  export default function AlbumDetail(props) {
   
  const [activeAlbum, setActiveAlbum] = useState({})
  console.log(activeAlbum)
  useEffect(() => {
    fetch(`http://localhost:3001/albums/${props.match.params.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data", data)
        setActiveAlbum(data)
      })
  }, [])
  return (
    <div>
        <ul>

           {activeAlbum.photos ? activeAlbum.photos.map(album => <li key={album.id}> <img  src={album.thumbnail} alt="Logo" /> {album.name} </li>): null}
        </ul>
    </div>
  )}