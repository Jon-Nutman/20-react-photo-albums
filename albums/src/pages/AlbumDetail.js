import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function AlbumDetail(props) {
  const [activeAlbum, setActiveAlbum] = useState({})
  useEffect(() => {
    fetch(`http://localhost:3001/albums/${props.match.params.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setActiveAlbum(data)
      })
  }, [props.match.url])
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3001/albums`)
      .then((resp) => resp.json())
      .then((data) => {
        setAlbums(data)
      })
  }, [])

  return (
   
    <div className='album-detail-container' >
      <div className='album-nav-side'>
      {albums.map((album) => (<div>
        <div className="album-detail-side-list-item">
          <Link  to={`/detail/${album.id}`} >
            <span>{album.name}</span>
          </Link>
        </div>
      </div>
))}  </div>
     
      <div className='photos-container'>
        {activeAlbum.photos
          ? activeAlbum.photos.map((photo) => (
              <div className="photo-card" key={photo.id}>
                {" "}
               <Link  > <img src={photo.thumbnail} alt="Logo" /> {photo.name}{" "}</Link>
              </div>
            ))
          : null}
      </div>
      
    </div>
    
  )
}
