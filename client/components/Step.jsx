import React from 'react';

import styles from '../css/step.css';

const Step = ({ step, stepNum }) => {
  return (
    <div className={styles['step-wrapper']}>
      <div className={styles['step-number']}>{stepNum}</div>
      <div className={styles['step-text']}>{step.display_text}</div>
    </div>
  )
};

export default Step;
