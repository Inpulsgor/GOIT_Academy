import React, { Component } from "react";

// import routes from "../../routes";
import { getInfo } from "../../services/api";
import GoBackButton from "../../component/goBackButton/GoBackButton";
import MovieDetails from "../../component/movieDetails/MovieDetails";
import routes from "../../routes";

class MovieDetailsPage extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    getInfo(movieId)
      .then((response) => response.data)
      .then((data) => this.setState({ data }))
      .catch((error) => this.setState({ error }));
  }

  GoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    this.props.history.push(routes.MOVIES_PAGE);
  };

  render() {
    const { data } = this.state;
    const { match, location } = this.props;
    return (
      <>
        <GoBackButton GoBack={this.GoBack} />
        {data && (
          <MovieDetails movie={data} match={match} location={location} />
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
