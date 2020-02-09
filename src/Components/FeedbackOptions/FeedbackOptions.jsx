import React from 'react';
import T from 'prop-types';
import styles from './FeedBackOptions.module.css';

const FeedbackOptions = ({ onClick }) => (
  <div>
    <button className={styles.button} type="button" onClick={onClick}>
      Good
    </button>
    <button className={styles.button} type="button" onClick={onClick}>
      Neutral
    </button>
    <button className={styles.button} type="button" onClick={onClick}>
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onClick: T.func.isRequired,
};

export default FeedbackOptions;
