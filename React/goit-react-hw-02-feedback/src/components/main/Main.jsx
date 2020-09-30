import React, { Component } from "react";
import PropTypes from "prop-types";

import Section from "../section/Section";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions";
import Statistics from "../statistics/Statistics";

class Main extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseFeedback = (e) => {
    const { name } = e.target;
    this.setState((prev) => {
      console.log([name]);
      return { [name]: prev[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.keys(this.state).reduce(
      (acc, value) => acc + this.state[value],
      0
    );
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(good, total);

    return (
      <Section title={this.props.title}>
        <FeedbackOptions onLeaveFeedback={this.increaseFeedback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={percentage}
        />
      </Section>
    );
  }
}

Main.defaultProps = {
  title: "Please leave feedback",
};

Main.propTypes = {
  percentage: PropTypes.number,
  total: PropTypes.number,
};

export default Main;
