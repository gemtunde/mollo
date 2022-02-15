import React, { useState, useEffect} from 'react';
import './Gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Modal from 'react-modal';

const Gallery = ({photos, loading}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const customStyles = {
    content: {
      top: '15%',
      left: '40%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '80%',
      height:'70%',
      transform: 'translate(-40%, -10%)',
    },
  }


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
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            onClick={()=> {
              setModalData(photo.urls.regular);
              setModalIsOpen(true);
            }}
            />
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}  data-aos='fade-left'>
            <img src={modalData}  key={photo.id}  alt={photo.alt_description}  data-aos='flip-up'/>
            <div className='image-text'>
                <p>{photo.user.first_name}</p>
                <p>{photo.user.location}</p>
            </div >
               
                <div>
                     <button onClick={() => setModalIsOpen(false)}>X</button>
                   </div>
           </Modal>
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

export default Gallery