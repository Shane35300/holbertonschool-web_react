import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}
