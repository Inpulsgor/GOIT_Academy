import React from "react";
import styles from "./aboutMovie.module.scss";

const {
  containerImage,
  containerPoster,
  containerDetails,
  containerMainTitle,
  containerScore,
  containerGenres,
  containerTitle,
  containerDescription,
} = styles;

const notFound =
  "https://www.gardensbythebay.com.sg/etc/designs/gbb/clientlibs/images/common/not_found.jpg";

const AboutMovie = ({ movie }) => {
  return (
    <>
      <div className={containerImage}>
        <img
          className={containerPoster}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
              : notFound
          }
          alt="poster"
        />
      </div>
      <div className={containerDetails}>
        <h2 className={containerMainTitle}>{movie.original_title}</h2>
        <p className={containerScore}>
          Score: <span>{movie.vote_average}</span>
        </p>
        <h2 className={containerTitle}>Overview</h2>
        <p className={containerDescription}>{movie.overview}</p>
        <h2 className={containerTitle}>Genres</h2>
        {movie.genres &&
          movie.genres.map((genre) => {
            return (
              <p className={containerGenres} key={genre.id}>
                {genre.name}
              </p>
            );
          })}
      </div>
    </>
  );
};

export default AboutMovie;
