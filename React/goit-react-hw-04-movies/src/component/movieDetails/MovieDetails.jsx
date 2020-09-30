import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import AboutMovie from "../aboutMovie/AboutMovie";
import AdditionalInfo from "../additionalInfo/AdditionalInfo";
import styles from "./movieDetails.module.scss";

const { container } = styles;

const CastPage = lazy(() =>
  import("../../pages/castPage/CastPage" /* webpackChunkName: "CastPage" */)
);

const ReviewsPage = lazy(() =>
  import(
    "../../pages/reviewsPage/ReviewsPage" /* webpackChunkName: "ReviewsPage" */
  )
);

const MovieDetails = ({ movie, match, location }) => {
  return (
    <>
      <div className={container}>
        <AboutMovie movie={movie} />
        <AdditionalInfo {...movie} match={match} location={location} />
      </div>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path={`${match.path}/cast`} component={CastPage} />
          <Route path={`${match.path}/reviews`} component={ReviewsPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default MovieDetails;
