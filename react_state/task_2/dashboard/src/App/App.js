import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      displayDrawer: false,
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
      ],
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {}, // Default value for logOut
  };

  componentDidMount() {
    // Add the favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = favicon;
    document.head.appendChild(link);

    // Add event listener for key press
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // Clean up the event listener
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

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

  render() {
    const { user, displayDrawer, listCourses, listNotifications } = this.state;
    const { logIn, logOut } = this;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <React.Fragment>
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <div className={css(styles.app)}>
            <Header />
            <div className={css(styles.body)}>
              {user.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login logIn={logIn} />
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
      </AppContext.Provider>
    );
  }
}

// Define styles with Aphrodite
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
