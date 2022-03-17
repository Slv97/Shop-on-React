import { useState } from "react";
import s from "./Gallery.module.css";

const Gallery = ({ gallery }) => {
    const [selectedPhoto, setSelectedPhoto] = useState(gallery[0]);

    let newGallery = gallery.map((photo, i) => (
        <div key={i}>
            <img
                src={photo}
                alt="product"
                onClick={() => setSelectedPhoto(photo)}
                className={selectedPhoto === photo ? s.selectedPhoto : s.photo}
            />
        </div>
    ));

    return (
        <div className={s.gallery}>
            <div className={s.newGallery}>{newGallery}</div>

            <img
                className={s.largePhoto}
                src={selectedPhoto}
                alt="thisProduct"
            />
        </div>
    );
};

export default Gallery;

