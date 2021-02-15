import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function Album(props) {
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
    <div className="main-container">
      <h1 className="header">My Albums</h1>
      <div className="album-list">
        {albums.map((album) => (
          <span className="album-card-container">
            {" "}
            <div className="album-card" key={album.id}>
              {" "}
              <Link to={`/detail/${album.id}`}>
                {" "}
                <div>
                <span className='album-thumbnail'> <img src={album.thumbnail} alt="Logo" /> </span>
                </div>{" "}
                <span className='album-name'> {album.name}</span>
              </Link>{" "}
            </div>
          </span>
        ))}
      </div>
    </div>
  )
}
