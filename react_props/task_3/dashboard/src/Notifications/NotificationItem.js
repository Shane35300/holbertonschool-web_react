import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
	return (
		<li data-notification-type={type} dangerouslySetInnerHTML={html ? html : { __html: value }}></li>
	);
}

NotificationItem.propTypes = {
	type: PropTypes.string,
	html: PropTypes.shape({ __html: PropTypes.string }),
	value: PropTypes.string
};

export default NotificationItem;
