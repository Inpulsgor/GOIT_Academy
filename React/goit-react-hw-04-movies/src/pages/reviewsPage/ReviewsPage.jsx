import React, { Component } from "react";
import { getReviews } from "../../services/api";
import styles from "./ReviewsPage.module.scss";

const { review, reviewInfo, reviewNotFound } = styles;

class ReviewsPage extends Component {
  state = {
    reviews: [],
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    getReviews(movieId)
      .then((response) => this.setState({ reviews: response.data.results }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length > 0 ? (
          <ul className={review}>
            {reviews.map((review) => (
              <li key={review.id}>
                <h3>
                  Author: <span>{review.author}</span>
                </h3>
                <p className={reviewInfo}>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <ul className={review}>
            <p className={reviewNotFound}>
              We don't have any reviews for this movie
            </p>
          </ul>
        )}
      </>
    );
  }
}

export default ReviewsPage;
