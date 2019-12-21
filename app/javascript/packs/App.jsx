import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from "react-redux";

import { getIsLoggedIn, logout, login } from './api/auth';

import configureStore from "./modules/store";

import Nav from './layouts/Nav';
import ContentBody from './layouts/ContentBody';
import Footer from './layouts/Footer';
import { NAV_HEIGHT } from './layouts/dimensions';

import { initReactDevise } from 'react-devise';
const getConfig = initReactDevise();

const store = configureStore({});

const App = props => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(null);

  useEffect(() => {
    getIsLoggedIn().then(res => {
      setIsLoggedIn(res);
    });
  }, []);

  const logoutUser = () => {
    logout().then(res => {
      setIsLoggedIn(false);
    });
  }

  const loginUser = () => {
    login({
      userEmail: 'r.shane.randolph@gmail.com',
      password: 'xxx',
    }).then(res => {
      setIsLoggedIn(true);
    });
  }

  return (
    <React.Fragment>
      <Nav/>
      {
        isLoggedIn ?
          <ContentBody onClick={ logoutUser }>I am logged in</ContentBody> :
          <ContentBody onClick={ loginUser }>I am not logged in</ContentBody>
      }
      <Footer/>
    </React.Fragment>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App name="React" />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
