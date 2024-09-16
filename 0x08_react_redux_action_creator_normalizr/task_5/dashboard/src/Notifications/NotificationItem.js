import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { markAsRead, id } = this.props;
    if (markAsRead) {
      markAsRead(id);
    }
  }

  render() {
    const { type, html, value } = this.props;

    return (
      <li
        className={css(styles[type])}
        onClick={this.handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            this.handleClick();
          }
        }}
      >
        {html ? (
          <span dangerouslySetInnerHTML={html} />
        ) : (
          value
        )}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: null,
};

const styles = StyleSheet.create({
  default: {
    backgroundColor: '#f5f5f5',
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
  },
  urgent: {
    backgroundColor: '#ff0000',
    color: '#ffffff',
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
  },
});

export { NotificationItem, styles };
