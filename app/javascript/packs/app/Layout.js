import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateIsLoggedIn, loginUser, logoutUser } from '../modules/action';

import Nav from './layout/Nav';
import ContentBody from './layout/ContentBody';
import Footer from './layout/Footer';

const Layout = props => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(null);

  useEffect(() => {
    props.updateIsLoggedIn();
  }, []);

  const logoutUser = () => {
    props.logoutUser();
  }

  const loginUser = () => {
    props.loginUser({
      userEmail: 'r.shane.randolph@gmail.com',
      password: 'xxx',
    });
  }

  return (
    <React.Fragment>
      <Nav/>
      <ContentBody>
        {
          props.isUserLoggedIn ?
          <span onClick={ logoutUser }>Yes, logged in</span> :
          <span onClick={ loginUser }>No, logged out</span>
        }
      </ContentBody>
      <Footer/>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    isUserLoggedIn: state.isUserLoggedIn
  };
}

export default connect(mapStateToProps, {
  updateIsLoggedIn,
  loginUser,
  logoutUser
})(Layout);
