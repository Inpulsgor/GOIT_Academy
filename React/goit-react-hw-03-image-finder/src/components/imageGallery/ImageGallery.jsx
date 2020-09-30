import React from "react";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import styles from "../imageGallery/ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  const {ImageGallery} = styles;
  return (
    <ul className={ImageGallery}>
      {images &&
        images.map((image) => {
          return (
            <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
