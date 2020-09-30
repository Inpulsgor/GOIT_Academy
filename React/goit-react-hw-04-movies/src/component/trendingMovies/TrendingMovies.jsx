import React from "react";
import { Link } from "react-router-dom";
import styles from "./trendingMovies.module.scss";

const {
  home,
  homeTitle,
  homeList,
  homeListItem,
  homeLink,
  homePoster,
  homeLinkDescr,
} = styles;

const notFound =
  "https://www.gardensbythebay.com.sg/etc/designs/gbb/clientlibs/images/common/not_found.jpg";

const TrendingMovies = ({ data, location }) => {
  return (
    <>
      <div className={home}>
        <h2 className={homeTitle}>Trending today</h2>
        <ul className={homeList}>
          {data.map((item) => (
            <li key={item.id} className={homeListItem}>
              <Link
                to={{
                  pathname: `/movies/${item.id}`,
                  state: { from: location },
                }}
                className={homeLink}
              >
                <img
                  className={homePoster}
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w200/${item.poster_path}`
                      : notFound
                  }
                  alt=""
                />
                <h3 className={homeLinkDescr}>{item.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TrendingMovies;
