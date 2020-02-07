import React from 'react';
import T from 'prop-types';

const Statistic = ({ label, value }) => (
  <div>
    <p>
      {label}
      {value}
    </p>
  </div>
);

Statistic.defaultProps = {
  value: 0,
};

Statistic.propTypes = {
  label: T.string.isRequired,
  value: T.number,
};

export default Statistic;
