//const galleryItems = require("../../../server/modules/gallery.data");
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
//import './GalleryList.css';

function GalleryList({gallery, getItems}) {
    return(
        
        <div>
            {gallery.map(item => (
            <>
            <GalleryItem
            key={item.id}
            item={item}
            getItems={getItems}
            />
            </>
            ))}
        </div>
        

    )
}

export default GalleryList;