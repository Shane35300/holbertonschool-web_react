import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import PropTypes from 'prop-types';
import favicon from '../favicon.ico';

class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => { }, // Valeur par défaut pour logOut
  };

  componentDidMount() {
    // Ajouter le favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = favicon;
    document.head.appendChild(link);

    // Ajouter l'écouteur d'événements pour les touches
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // Nettoyer l'écouteur d'événements
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    const { isLoggedIn } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];

    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications} />
        <div className={css(styles.app)}>
          <Header />
          <div className={css(styles.body)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
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

// Définition des styles avec Aphrodite
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

export default App;
