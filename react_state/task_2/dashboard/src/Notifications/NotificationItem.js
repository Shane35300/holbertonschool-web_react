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
        className={css(styles[type])} // Appliquer le style basé sur le type
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

// Définir les styles avec Aphrodite
const styles = StyleSheet.create({
  default: {
    backgroundColor: '#f5f5f5',
    width: '100%', // Prendre toute la largeur
    borderBottom: '1px solid black', // Bordure noire en bas
    fontSize: '20px', // Taille de la police
    padding: '10px 8px', // Padding
  },
  urgent: {
    backgroundColor: '#ff0000',
    color: '#ffffff',
    width: '100%', // Prendre toute la largeur
    borderBottom: '1px solid black', // Bordure noire en bas
    fontSize: '20px', // Taille de la police
    padding: '10px 8px', // Padding
  },
});

export { NotificationItem, styles };
