import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

/**
 * Notifications component.
 * @returns {JSX.Element} - A div with a notification message.
 */
export default function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };
  return (
    <div className="Notifications">
      <button
        style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '20px' }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        x
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}
