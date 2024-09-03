import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { NotificationItem } from './NotificationItem';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.listNotifications.length > this.props.listNotifications.length) {
      return true;
    }
    return false;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div
          className={css(styles.menuItem, !displayDrawer && styles.menuItemVisible)}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '20px',
              }}
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}
            >
              x
            </button>
            {listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                      id={notification.id}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

// Define styles with Aphrodite
const styles = StyleSheet.create({
  menuItem: {
    position: 'fixed',
    top: '0',
    right: '0',
    padding: '10px',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    animation: 'none',
    zIndex: 1000,
    ':hover': {
      animation: `${keyframesOpacityChange} 1s, ${keyframesBounce} 0.5s`,
      animationIterationCount: 3,
    },
  },
  menuItemVisible: {
    display: 'none',
  },
  notifications: {
    border: '1px dashed red',
    padding: '10px',
    position: 'relative',
  },
});

// Keyframes for the opacity change animation
const keyframesOpacityChange = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

// Keyframes for the bouncing effect
const keyframesBounce = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(0px)' },
};

export default Notifications;
