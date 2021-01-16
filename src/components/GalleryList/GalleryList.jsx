import galleryItems = require("../../../server/modules/gallery.data");
import './GalleryList.css';

function GalleryList({gallerylist}) {
    return(
        <div>
            {gallerylist.map(item => 
                (<><galleryItem)
                )}
        </div>

    )
}