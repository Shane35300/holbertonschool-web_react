import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import PropTypes from 'prop-types';
import favicon from '../favicon.ico';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest, logout } from '../actions/uiActionCreators'; // Assurez-vous d'importer logout

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
      listNotifications: [
        { id: 1, type: 'default', value: 'Nouveau cours disponible' },
        { id: 2, type: 'urgent', value: 'Nouveau CV disponible' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Exigence urgente</strong> - à compléter avant la fin de la journée' } },
      ],
    };

    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    loginRequest: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired, // Ajoutez logout ici
    displayDrawer: PropTypes.bool,
    displayNotificationDrawer: PropTypes.func.isRequired,
    hideNotificationDrawer: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isLoggedIn: false,
    displayDrawer: false,
  };

  componentDidMount() {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = favicon;
    document.head.appendChild(link);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Vous vous déconnectez');
      this.props.logout(); // Utilisez la méthode logout ici
    }
  };

  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id !== id),
    }));
  }

  render() {
    const { user, listCourses, listNotifications, loginRequest, logout } = this.props; // Obtenez logout et user des props

    return (
      <React.Fragment>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={this.props.displayDrawer}
          handleDisplayDrawer={this.props.displayNotificationDrawer}
          handleHideDrawer={this.props.hideNotificationDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.app)}>
          <Header user={user} logout={logout} /> {/* Passez user et logout ici */}
          <div className={css(styles.body)}>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Liste des cours">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Connectez-vous pour continuer">
                <Login logIn={loginRequest} /> {/* Utiliser loginRequest ici */}
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="Nouvelles de l'École">
              <p>
                Voici quelques nouvelles de l'école. Nous prévoyons de lancer plusieurs nouveaux cours au cours du semestre à venir. Restez à l'écoute pour plus de détails !
              </p>
            </BodySection>
          </div>
          <Footer className={css(styles.footer)} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: {
      isLoggedIn: state.get('isUserLoggedIn'), // Assurez-vous que l'état est correctement structuré
      email: state.get('userEmail'), // Ajoutez ceci si tu as l'email stocké dans l'état
    },
    displayDrawer: state.get('isNotificationDrawerVisible'),
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  logout, // Assurez-vous que logout est ici
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;

// Définir les styles avec Aphrodite
const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
  },
  body: {
    padding: '20px',
  },
  footer: {
    padding: '10px 0',
    borderTop: '1px solid #ccc',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  },
});
