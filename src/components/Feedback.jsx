import React, { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickAtButtom = options => {
    this.setState(prev => ({
      [options]: prev[options] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.clickAtButtom}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={percent}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
