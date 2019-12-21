import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import store from './modules/store';
import Layout from './app/Layout';

const App = props => {
  return (
    <Layout />
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={ store }>
      <App name="React" />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
