import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// --- /components ---
import Header from "../header/Header";
import routes from "../../routes";
// --- /pages ---

const HomePage = lazy(() =>
  import("../../pages/homePage/HomePage" /* webpackChunkName: "HomePage" */)
);

const MoviesPage = lazy(() =>
  import(
    "../../pages/moviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */
  )
);

const MovieDetailsPage = lazy(() =>
  import(
    "../../pages/movieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route exact path={routes.MAIN_PAGE} component={HomePage} />
          <Route
            path={routes.MOVIES_DETAILS_PAGE}
            component={MovieDetailsPage}
          />
          <Route path={routes.MOVIES_PAGE} component={MoviesPage} />
          <Redirect to={routes.MAIN_PAGE} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
