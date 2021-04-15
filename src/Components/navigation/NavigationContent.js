import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";

const NavigationContent = ({ routes, match = "", ...rest }) => {
  return (
    <Suspense fallback={<h2>...loading</h2>}>
      <Switch>
        {routes.map(({ exact, path, component: MyComponent }) => (
          <Route
            exact={exact}
            path={`${match}${path}`}
            render={(props) => <MyComponent {...props} {...rest} />}
            key={path}
          />
        ))}
        <Route component={HomePage} />
      </Switch>
    </Suspense>
  );
};

export default NavigationContent;
