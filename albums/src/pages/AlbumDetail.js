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
  const [popUp, setPopUp] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3001/albums/${props.match.params.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.thumbnail)
        setPopUp(data)
      })
  }, [])
  console.log(activeAlbum)

  const modal = document.querySelector('.modal');
  console.log(modal)

  // function handleClick(){
  //   onClick
  // }
console.log(popUp.photos)
console.log(popUp.name)
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
               <Link onClick={() => modal.classList.add('open')} key={photo.id}> <img src={photo.thumbnail} alt="Logo"  /> {photo.name}{" "}</Link>
              </div>
            ))
          : null}
      </div>

      <div className='modal'  >
            {/* {activeAlbum ?
            activeAlbum.forEach(active =>{
              active.addEventListener('click', () =>{
                modal.classList.add('open')
              } )
            })
          : null} */}


        <img className='full-img' src={popUp.thumbnail} alt='not found'/>
        <p>{popUp.name}</p>
      </div>
      
    </div>
    
  )
}
