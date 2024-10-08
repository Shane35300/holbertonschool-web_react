import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const style = isHeader ? styles.headerRow : styles.row;

  return (
    <tr className={css(style)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b5',
  },
  row: {
    backgroundColor: '#f5f5f5',
  },
});

export { CourseListRow, styles };
