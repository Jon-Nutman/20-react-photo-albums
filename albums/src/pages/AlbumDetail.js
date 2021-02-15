import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

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
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/albums")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data", data)
        setAlbums(data)
      })
  }, [])

  return (
    <div className='album-detail-container'><ul className='album-nav-side'>
      {albums.map((album) => (<div>
        <li className="album-detail-side-list-item"><Link  to={`/detail/${album.id}`} ><span>{album.name}</span></Link></li>
      </div>

      ))}  </ul>
      <ul>
        {activeAlbum.photos
          ? activeAlbum.photos.map((photo) => (
              <li key={photo.id}>
                {" "}
                <img src={photo.thumbnail} alt="Logo" /> {photo.name}{" "}
              </li>
            ))
          : null}
      </ul>
    </div>
  )
}
