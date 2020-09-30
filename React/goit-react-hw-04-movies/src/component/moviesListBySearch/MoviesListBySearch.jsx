import React from "react";
import { Link } from "react-router-dom";
import styles from "./MoviesListBySearch.module.scss";
const { searchContainer, searchList, searchListItem, searchLink } = styles;

const MoviesListBySearch = ({ responseData, location }) => {
  return (
    <>
      <div className={searchContainer}>
        <ul className={searchList}>
          {responseData.map((movie) => (
            <li key={movie.id} className={searchListItem}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
                className={searchLink}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MoviesListBySearch;
