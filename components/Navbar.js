// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

const StyledAppBar = styled(AppBar)`
  background-color: #2a3f54; /* Light dark blue background */
  box-shadow: none; /* Remove shadows */
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const StyledTypography = styled(Typography)`
  flex-grow: 1;
  color: #fff; /* Text color */
  font-weight: bold;
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin-left: 20px;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: #2196f3; /* Change hover color to blue */
  }

  &.active {
    color: #2196f3; /* Active link color */
    font-weight: bold;
  }
`;

const Navbar = () => {
  const location = useLocation();

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledTypography variant="h6">
          Coding Challenge Platform
        </StyledTypography>
        <NavLinkContainer>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink>
          <NavLink to="/challenges" className={location.pathname.includes('/challenges') ? 'active' : ''}>Challenges</NavLink>
          <NavLink to="/create-challenge" className={location.pathname === '/create-challenge' ? 'active' : ''}>Create Challenge</NavLink>
          <NavLink to="/leaderboard" className={location.pathname === '/leaderboard' ? 'active' : ''}>Leaderboard</NavLink>
          <NavLink to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>Profile</NavLink>
          <NavLink to="/test" className={location.pathname === '/test' ? 'active' : ''}>Test</NavLink>
          <NavLink to="/admin/create-test" className={location.pathname === '/admin/create-test' ? 'active' : ''}>Admin</NavLink> {/* Link to Admin Create Test Page */}
        </NavLinkContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
