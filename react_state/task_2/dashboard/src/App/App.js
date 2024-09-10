import React, { Component } from 'react';
import AppContext from './AppContext';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    };
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
    const { user } = this.state;
    const { logIn, logOut } = this;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        {user.isLoggedIn ? <CourseList /> : <Login logIn={logIn} />}
      </AppContext.Provider>
    );
  }
}

export default App;
