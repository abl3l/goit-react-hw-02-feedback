import React from 'react';
import T from 'prop-types';

const Statistic = ({ label, value = 0 }) => (
  <div>
    <p>
      {label}
      {value}
    </p>
  </div>
);

Statistic.propTypes = {
  label: T.string.isRequired,
  value: T.number,
};

export default Statistic;
