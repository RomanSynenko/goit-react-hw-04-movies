import React from "react";

import { mainRoutes } from "../../routes/mainRoutes";
import NavigationContent from "../navigation/NavigationContent";
import { MainContainer } from "./MainStyled";

const Main = () => {
  return (
    <MainContainer>
      <NavigationContent routes={mainRoutes} />
    </MainContainer>
  );
};

export default Main;
