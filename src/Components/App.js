import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import { mainRoutes } from "../routes/mainRoutes";
import Header from "./header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback=''>
        <Switch>
          {mainRoutes.map(({ path, exact, component }) => (
            <Route exact={exact} path={path} component={component} key={path} />
          ))}
          <Redirect from="" to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
