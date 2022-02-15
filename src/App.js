import React,{useState} from 'react';
import Gallery from './components/gallery/Gallery';
import Header from './components/header/Header';
import axios from 'axios';

function App() {

  const [query, setQuery] = useState("");
  const [photos, setPhotos]= useState([]);
  const [loading, setLoading]= useState(false);
  const [searching, setSearhing]= useState(false);

  const client_id=process.env.REACT_APP_CLIENT_ID
  //const client_id='9rSQHtrGme9FTCLQazvSBKyb-o0sDtVgEpr5xF7Xbpw'
  console.log(photos)

  const handleSubmit = (e)=> {
      e.preventDefault();
      //console.log(query);
      setLoading(true);
      setSearhing(true);
      //api call
       fetch(`https://api.unsplash.com/search/photos/?query=${query}&client_id=${client_id}&per_page=20`)
      .then(data=>data.json())
      .then(data=>{
        setPhotos(data.results);
        setLoading(false);
      })
      .catch(err=>console.log(err));

      //set form to empty
      setQuery('')
  }
  return (
    <div className="App">
    
      <Header text='Unsplash-Clone' className='header-container'>
         {!searching ?
         
         <form onSubmit={handleSubmit}>
          <input
              type='text'
               className='header-input'
               value={query}
               onChange={(e)=> setQuery(e.target.value)}
               placeholder='Search for photo'
               
               />
          </form> :
          <h2>Searching for {query}</h2>     }      
        </Header>
        <Gallery
        photos={photos}
        loading={loading}
      
        />
    </div>
  );
}

export default App;
