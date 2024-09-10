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
    if (nextProps.listNotifications.length > this.props.listNotifications.length ||
        nextProps.displayDrawer !== this.props.displayDrawer) {
      return true;
    }
    return false;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <>
        {/* Modifier le onClick pour appeler handleDisplayDrawer */}
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
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
              // Modifier le onClick pour appeler handleHideDrawer
              onClick={handleHideDrawer}
            >
              x
            </button>
            {listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.notificationsList)}>
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

// Définir les propTypes pour handleDisplayDrawer et handleHideDrawer
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
  handleDisplayDrawer: PropTypes.func,  // Ajout de la prop handleDisplayDrawer
  handleHideDrawer: PropTypes.func,     // Ajout de la prop handleHideDrawer
};

// Définir les valeurs par défaut pour handleDisplayDrawer et handleHideDrawer
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},  // Valeur par défaut pour handleDisplayDrawer
  handleHideDrawer: () => {},     // Valeur par défaut pour handleHideDrawer
};

// Définir les styles avec Aphrodite
const styles = StyleSheet.create({
  menuItem: {
    cursor: 'pointer',
  },
  notifications: {
    border: '1px dashed red',
    padding: '10px',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#fff',
    overflowY: 'auto',
    zIndex: 1000,
    '@media (max-width: 900px)': {
      padding: '0',
    },
  },
  notificationsList: {
    padding: 0,
    margin: 0,
    fontSize: '20px',
  },
});

export default Notifications;
