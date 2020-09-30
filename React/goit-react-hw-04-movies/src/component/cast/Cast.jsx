import React from "react";
import styles from "./cast.module.scss";
const { castList, castListItem, castImage, castTitle } = styles;

const notFound =
  "https://www.gardensbythebay.com.sg/etc/designs/gbb/clientlibs/images/common/not_found.jpg";

const Cast = ({ cast }) => {
  return (
    <>
      <ul className={castList}>
        {cast.map((author) => (
          <li key={author.id} className={castListItem}>
            <img
              className={castImage}
              src={
                author.profile_path
                  ? `https://image.tmdb.org/t/p/w200${author.profile_path}`
                  : notFound
              }
              alt="author_profile"
            />
            <h3 className={castTitle}>{author.name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
