import {useState} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './GalleryItem.css';

function GalleryItem({
    //list of deconstructed props
    
    galleryItems,
    item
}){

    const [isImageVisible, setIsImageVisible] = useState(false);

    const addLike = (item) => {
        axios.put(`/gallery/like/${id}`, item)
            .then(response = {
                getItems();
            }).catch(error => {
                alert('error updating PUT');
            })


    }; //end addLike

    const flipImage = () => {
        setIsImageVisible(!isImageVisible);
    }

    return(

        <div>
            {isImageVisible ?
            {item.path}
            :
            {item.description}
            }
        </div>

        
        <div>
            <p className="likeNum">Likes: ${item.likes}</p>
            <button 
            className="likeBtn" 
            onClick={ () => addLike(item.id)}>💙</button>
        </div>
    )
}

export default GalleryItem;