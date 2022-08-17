import './App.css';
import {useState, useEffect} from 'react'
import Gallery from './components/Gallery';
import ButtonBar from './components/ButtonBar';


function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
  
  useEffect(() => {
      document.title='Welcome to Artworld'
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => {
        setData(resData);
      })
      .catch(() => {

      })
  }, [artId])  
  
  function onChangeImageId(imageOffset){
    setArtId(artId + imageOffset);
  }

  return <div className='cool-art-gallery'>
    <Gallery 
      primaryImage={data.primaryImage} 
      title={data.title} 
      artistDisplayName={data.artistDisplayName}/>
      <ButtonBar onChangeImageId={setArtId}/>
  </div>
}


export default App;
