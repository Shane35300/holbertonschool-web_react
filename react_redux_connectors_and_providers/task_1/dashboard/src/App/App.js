import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import AppContext from './AppContext';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import PropTypes from 'prop-types';
import favicon from '../favicon.ico';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators'; // import des créateurs d'actions

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
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

    this.markNotificationAsRead = this.markNotificationAsRead.bind(this); // Lier la méthode
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
    displayDrawer: PropTypes.bool, // Ajout de propType pour displayDrawer
    displayNotificationDrawer: PropTypes.func.isRequired, // PropTypes pour les créateurs d'actions
    hideNotificationDrawer: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
    displayDrawer: false, // Ajout de defaultProp pour displayDrawer
  };

  componentDidMount() {
    // Ajout de la favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = favicon;
    document.head.appendChild(link);

    // Ajout d'un écouteur d'événements pour la touche
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // Nettoyage de l'écouteur d'événements
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Vous vous déconnectez');
      this.props.logOut();
    }
  };

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  };

  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id !== id),
    }));
  }

  render() {
    const { user, listCourses, listNotifications } = this.state;
    const { logIn, logOut, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <React.Fragment>
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer} // Utiliser la prop
            handleDisplayDrawer={displayNotificationDrawer} // Utiliser le créateur d'action
            handleHideDrawer={hideNotificationDrawer} // Utiliser le créateur d'action
            markNotificationAsRead={this.markNotificationAsRead} // Passer la méthode ici
          />
          <div className={css(styles.app)}>
            <Header />
            <div className={css(styles.body)}>
              {user.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Liste des cours">
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Connectez-vous pour continuer">
                  <Login logIn={logIn} />
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
      </AppContext.Provider>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.toJS());
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible'), // Mapper isNotificationDrawerVisible à displayDrawer
  };
};

// Connecter App au store Redux
const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
export { mapStateToProps };

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
