import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = ({ target }) => {
    const name = target.textContent.toLowerCase();
    this.setState(state => ({
      [name]: state[name] + 1,
    }));
  };

  total = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.total()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onClick={this.handleIncrement} />
        </Section>

        <Section title="Statistics">
          {this.total() === 0 ? (
            <p>No feedback given</p>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.total()}
              positivePercentage={this.positivePercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
export default App;
