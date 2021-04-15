import React from "react";
import { NavigationContainer } from "./NavigationStyled";
import { NavLink } from "react-router-dom";

const Navigation = ({ routes, match = "" }) => {
  return (
    <NavigationContainer>
      <ul className='navigationList'>
        {routes.map(({ path, name, exact }) => (
          <li className='navigationListItem' key={path}>
            <NavLink
              exact={exact}
              to={`${match}${path}`}
              className='navigationLink'
              activeClassName='navigationLinkActive'>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
