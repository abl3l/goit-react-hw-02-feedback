import React from 'react';
import T from 'prop-types';

const Section = ({ title, children }) => (
  <div>
    {' '}
    <h1>{title}</h1> {children}{' '}
  </div>
);

Section.propTypes = {
  title: T.string.isRequired,
  children: T.element.isRequired,
};
export default Section;
