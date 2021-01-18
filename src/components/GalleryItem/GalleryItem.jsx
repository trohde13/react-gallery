import {useState} from 'react';
import axios from 'axios';

//import './GalleryItem.css';

function GalleryItem({
    //list of deconstructed props
    getItems,
    item
    }){

        const [isImageVisible, setIsImageVisible] = useState(true);

        const addLike = (id) => {
            
        axios.put(`/gallery/like/${id}`)
            .then(response => {
                getItems();
            }).catch(error => {
                alert('error updating PUT');
            })
        }; //end addLike

        const flipImage = () => {
        setIsImageVisible(!isImageVisible);
        
        
        }; //end flipImage
         

    return(

               
        <div class="photoBox" key={item.id}>
            {isImageVisible ? 
            <>
            <img src={item.path} onClick={() => flipImage(item.id)}></img>

            <p className="likeBox"><button 
            className="likeBtn" 
            onClick={ () => addLike(item.id)}>💙</button>
            {item.likes} Likes</p>
            
            </> : <>

            <p className="descriptionBox" onClick={() => flipImage(item.id)}>{item.description}</p>
            
            <p><button 
            className="likeBtn" 
            onClick={ () => addLike(item.id)}>💙</button>
            {item.likes} Likes</p>
            </>
            }
        </div>
    )
}; //end GalleryItem

export default GalleryItem;