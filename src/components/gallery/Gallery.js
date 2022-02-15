import React, {useEffect} from 'react';
import './Gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css'


const Gallery = ({photos, loading}) => {
    useEffect(() => {
        AOS.init({
            duration : 1000,
        });
    }, [])


  return (
    <div className='gallery'>
        
      {  !loading ? 
      photos.map(photo=>
        (
            <div className='gallery-content'>
       
        <img
         src={photo.urls.regular}
          alt={photo.alt_description}
           key={photo.id}
            className='grid-images'
            data-aos='fade-left'
            />
            <div className='image-text'>
                <p>{photo.user.first_name}</p>
            </div >
            </div>
            ))
            :
            <p>Loading...</p>
      
      }
        
    </div>
  )
}

export default Gallery