import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

/**
 * Notifications component.
 * @param {Object} props - The props object.
 * @param {boolean} props.displayDrawer - Whether the notifications drawer should be displayed.
 * @param {Array} props.listNotifications - The list of notifications to display.
 * @returns {JSX.Element} - A div with a notification message.
 */
export default function Notifications({ displayDrawer, listNotifications }) {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '20px' }}
            aria-label="Close"
            onClick={handleButtonClick}
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
