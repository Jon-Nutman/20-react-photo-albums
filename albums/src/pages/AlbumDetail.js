import { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

export default function AlbumDetail(props) {
    const [activeAlbum, setActiveAlbum] = useState([])
useEffect(() =>{
    const url = 'http://localhost:3001/albums/:id'
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setActiveAlbum(data)
        console.log(activeAlbum)
    })
   
}, [])

    return <div>

    </div>



//     <div>
//     <ul>
//         {activeAlbum.photos.map(album => <li> <img src={activeAlbum.photos.photos.thumbnail} alt="Logo" /> {activeAlbum.photos.photos.name} </li>)}
//     </ul>
// </div>
}