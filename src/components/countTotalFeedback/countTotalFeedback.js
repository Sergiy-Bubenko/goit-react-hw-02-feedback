import { Component } from 'react';

class CountTotalFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleGoFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return { total: prevState.total + 1 };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positiveFeedback: ((prevState.good / prevState.total) * 100).toFixed(),
      };
    });
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;
    return (
      <>
        <h1>Please leave feedback</h1>
        <button type="button" name="good" onClick={this.handleGoFeedback}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.handleGoFeedback}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handleGoFeedback}>
          Bad
        </button>
        <h2>Statistics</h2>
        <span>Good:{good}</span>
        <span>Neutral:{neutral}</span>
        <span>Bad:{bad}</span>
        <span>Total:{total}</span>
        <span>Positive feedback:{positiveFeedback}%</span>
      </>
    );
  }
}

export default CountTotalFeedback;
