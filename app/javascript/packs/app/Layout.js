import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getIsLoggedIn, logout, login } from '../api/auth';
import { updateIsLoggedIn } from '../modules/action';

import Nav from './layout/Nav';
import ContentBody from './layout/ContentBody';
import Footer from './layout/Footer';
import { NAV_HEIGHT } from './layout/dimensions';

const Layout = props => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(null);

  useEffect(() => {
    props.updateIsLoggedIn();
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
      <ContentBody>
        {
          props.isUserLoggedIn ?
          <span>Yes, logged in</span> :
          <span>No, logged out</span>
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
  updateIsLoggedIn
})(Layout);
