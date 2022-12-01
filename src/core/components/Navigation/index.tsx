import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@constants';
import { Wrapper, NavWrapper } from './index.styled';

export const Navigation: React.FC = () => {
  const routes = [
    { path: ROUTES.ABOUT_PAGE, name: 'About' },
    { path: ROUTES.PORTFOLIO, name: 'Portfolio' },
    { path: ROUTES.CONTACTS, name: 'Contact' }
  ];

  const activeStyle = {
    textDecoration: 'none',
    color: 'white'
  };

  return (
    <Wrapper>
      <NavWrapper>
        {routes.map(x =>
          <NavLink key={x.path} to={x.path} style={({ isActive }) => isActive ? activeStyle : undefined}>
            {x.name}
          </NavLink>
        )}
      </NavWrapper>
    </Wrapper>
  );
};
