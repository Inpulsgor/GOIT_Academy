import React from "react";
import styles from "../imageGalleryItem/ImageGalleryItem.module.css";

const imageGalleryItem = ({ image, onClick }) => {
  const {largeImageURL, webformatURL} = image;
  const {ImageGalleryItem , ImageGalleryItemImage} = styles;
  return (
    <li className={ImageGalleryItem}>
      <img
        onClick={() => onClick(largeImageURL)}
        src={webformatURL}
        alt="largeImage"
        className={ImageGalleryItemImage}
      />
    </li>
  );
};

export default imageGalleryItem;
