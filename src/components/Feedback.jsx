import React, { useState } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export const Feedback = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const clickAtButtom = options => {
  //   this.setState(prev => ({
  //     [options]: prev[options] + 1,
  //   }));
  // };

  const clickAtButtom = options => {
    switch (options) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    // return Object.values(this.state).reduce((acc, el) => acc + el, 0);
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / countTotalFeedback()) * 100);
  };

  const total = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage();

  const objState = { good, neutral, bad };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(objState)}
          onLeaveFeedback={clickAtButtom}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
