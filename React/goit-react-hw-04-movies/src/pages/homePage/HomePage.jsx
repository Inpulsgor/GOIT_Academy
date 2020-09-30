import React, { Component } from "react";

import { getTrending } from "../../services/api";
import TrendingMovies from "../../component/trendingMovies/TrendingMovies";

class HomePage extends Component {
  state = {
    data: [],
    error: null,
  };

  componentDidMount() {
    getTrending()
      .then((response) => {
        this.setState({ data: [...response.data.results] });
      })
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { location } = this.props;
    const { data } = this.state;

    return (
      <>
        {data.length > 0 && <TrendingMovies data={data} location={location} />}
      </>
    );
  }
}

export default HomePage;
