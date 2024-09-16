import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function BodySection({ title, children }) {
  return (
    <div className={css(styles.bodySection)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BodySection.defaultProps = {
  children: null,
};

// Define styles using Aphrodite
const styles = StyleSheet.create({
  bodySection: {
    marginBottom: '20px', // Example style, customize as needed
  },
});

export default BodySection;
