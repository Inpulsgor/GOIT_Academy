import React, { Component } from "react";
import { getCredits } from "../../services/api";
import Cast from "../../component/cast/Cast";

class CastPage extends Component {
  state = {
    cast: [],
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    getCredits(movieId)
      .then((response) => {
        this.setState({ cast: [...response.data.cast] });
      })
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { cast } = this.state;
    return <>{cast.length > 0 && <Cast cast={cast} />}</>;
  }
}

export default CastPage;
