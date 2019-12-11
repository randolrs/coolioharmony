import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Nav from './layouts/Nav';
import ContentBody from './layouts/ContentBody';
import Footer from './layouts/Footer';

import { NAV_HEIGHT } from './layouts/dimensions';

const Hello = props => (
  <React.Fragment>
    <Nav/>
    <ContentBody>More content</ContentBody>
    <Footer/>
  </React.Fragment>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
