import React, {useEffect} from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css'


const Home = ({photos, loading}) => {
    useEffect(() => {
        AOS.init({
            duration : 1000,
        });
    }, [])


  return (
    <div className='home'>
       
      {  !loading ? 
      photos.map(photo=>
        (
            <div className='home-content'>
       
        <img
         src={photo.urls.regular}
          alt={photo.alt_description}
           key={photo.id}
            className='grid-images'
            data-aos='fade-left'
            />
            <div className='image-text'>
                <p>{photo.user.first_name}</p>
                <p>{photo.user.location}</p>
            </div >
            </div>
            ))
            :
            <p>Loading...</p>
      
      }
        
    </div>
  )
}

export default Home