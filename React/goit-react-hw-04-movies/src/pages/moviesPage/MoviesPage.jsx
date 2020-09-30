import React, { Component } from "react";
import { getSearch } from "../../services/api";
import { getQueryParams } from "../../services/helpers";

import Form from "../../component/form/Form";
import MoviesListBySearch from "../../component/moviesListBySearch/MoviesListBySearch";

class MoviesPage extends Component {
  state = {
    responseData: [],
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    query && this.searchMovie(query);
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.searchMovie(nextQuery);
    }
  }

  searchMovie = (query) => {
    query &&
      getSearch(query)
        .then((data) => {
          this.setState({ responseData: [...data.data.results] });
        })
        .catch((error) => this.setState({ error }));
  };

  handleSearch = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { responseData } = this.state;
    const { location } = this.props;
    return (
      <>
        <Form onSubmit={this.handleSearch} />
        {responseData.length > 0 && (
          <MoviesListBySearch responseData={responseData} location={location} />
        )}
      </>
    );
  }
}

export default MoviesPage;
