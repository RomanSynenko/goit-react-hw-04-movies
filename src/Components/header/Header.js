import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import Navigation from "../navigation/Navigation";
import { HeaderContainer } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation routes={mainRoutes} />
    </HeaderContainer>
  );
};

export default Header;
