import galleryItems = require("../../../server/modules/gallery.data");
import GalleryItem from './GalleryItem/GalleryItem.jsx'
import './GalleryList.css';

function GalleryList({galleryItems}) {
    return(
        <div>
            {gallerylist.map(item => (
                <>
                <galleryItems
                key = {item.id}
                item = {item}
                />
                </>
                ))}
        </div>

        <GalleryItem
        galleryItem={galleryItem}
        />

    )
}

export default GalleryList