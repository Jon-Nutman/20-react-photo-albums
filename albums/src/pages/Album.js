import { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'


export default function Album(props) {
    const [albums, setAlbums] = useState([])
useEffect(() =>{
    const url = 'http://localhost:3001/albums'
    fetch(url)
    .then(response => response.json())
    .then(data => {
        setAlbums(data)
        console.log(data)
    })
}, [])
    return <div>
        <ul>
           <Link to={`/detail/${albums.id}`}>{albums.map(album => <li key={album.id}> <img  src={album.thumbnail} alt="Logo" /> {album.name} </li>)}</Link>
        </ul>
    </div>
}