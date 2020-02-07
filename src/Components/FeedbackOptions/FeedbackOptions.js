import React from 'react';
import T from 'prop-types';

const FeedbackOptions = ({ onClick }) => (
  <div>
    <button type="button" onClick={onClick}>
      Good
    </button>
    <button type="button" onClick={onClick}>
      Neutral
    </button>
    <button type="button" onClick={onClick}>
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onClick: T.func.isRequired,
};

export default FeedbackOptions;
