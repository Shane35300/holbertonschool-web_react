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
        className={css(styles[type])} // Apply the style based on type
        dangerouslySetInnerHTML={html}
        onClick={this.handleClick}
        onKeyPress={this.handleClick}
        role="button"
        tabIndex={0}
      >
        {html ? null : value}
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
  },
  urgent: {
    backgroundColor: '#ff0000',
    color: '#ffffff',
  },
});

export { NotificationItem, styles };
