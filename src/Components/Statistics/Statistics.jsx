import React from 'react';
import T from 'prop-types';
import Statistic from './Statistic.jsx';

const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = '0%',
}) => (
  <div>
    <Statistic label="Good:" value={good} />
    <Statistic label="Neutral:" value={neutral} />
    <Statistic label="Bad:" value={bad} />
    <Statistic label="Total:" value={total} />
    <Statistic label="Positive feedback :" value={positivePercentage} />
  </div>
);

Statistics.propTypes = {
  good: T.number,
  neutral: T.number,
  bad: T.number,
  total: T.number,
  positivePercentage: T.string,
};

export default Statistics;
