import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList'
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import favicon from '../favicon.ico';
import './App.css';

function App({ isLoggedIn }) {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = favicon;
    document.head.appendChild(link);
  }, []);
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
