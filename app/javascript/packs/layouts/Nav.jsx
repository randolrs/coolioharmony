import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components';

import { NAV_HEIGHT } from './dimensions';

const Nav = props => (
  <NavContainer>Nav</NavContainer>
)

export default Nav;

const NavContainer = styled.div`
  height: ${ NAV_HEIGHT }px;
  width: 100%;
  background: #dddddd;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
`;

