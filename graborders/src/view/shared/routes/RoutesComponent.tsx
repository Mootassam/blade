import React, { useEffect, useRef } from "react";
import PrivateRoute from "src/view/shared/routes/PrivateRoute";
import routes from "src/view/shared/routes";
import lazyRouter from "src/view/shared/Lazyroutes";
import PublicRoute from "src/view/shared/routes/PublicRoute";
import ScreenRoute from "src/view/shared/routes/ScreenRoute";
import { useSelector } from "react-redux";
import authSelectors from "src/modules/auth/authSelectors";
import ProgressBar from "src/view/shared/ProgressBar";
import { Route, Switch } from "react-router-dom";
import EmptyPermissionsRoute from "src/view/shared/routes/EmptyPermissionsRoute";

function RoutesComponent() {
  const isInitialMount = useRef(true);

  const authLoading = useSelector(authSelectors.selectLoadingInit);
  const loading = authLoading;

  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const currentTenant = useSelector(authSelectors.selectCurrentTenant);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      // ProgressBar.start();
      return;
    }

    if (!loading) {
      // ProgressBar.done();
    }
  }, [loading]);

  if (loading) {
    return <div />;
  }

  return (
    <Switch>
      {routes.publicRoutes.map((route) => (
        <PublicRoute
          exact
          key={route.path}
          path={route.path}
          component={lazyRouter({ loader: route.loader })}
          currentUser={currentUser}
          currentTenant={currentTenant}
        />
      ))}

      {routes.emptyPermissionsRoutes.map((route) => (
        <EmptyPermissionsRoute
          key={route.path}
          exact
          path={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          component={lazyRouter({
            loader: route.loader,
          })}
        />
      ))} 
      {routes.privateRoutes.map((route) => (
        <PrivateRoute
          exact
          key={route.path}
          path={route.path}
          component={lazyRouter({ loader: route.loader })}
          currentUser={currentUser}
          currentTenant={currentTenant}
          permissionRequired={route.permissionRequired}
        />
      ))}
      {routes.screenRoutes.map((route) => (
        <ScreenRoute
          exact
          key={route.path}
          path={route.path}
          component={lazyRouter({ loader: route.loader })}
          currentUser={currentUser}
          currentTenant={currentTenant}
        />
      ))}
      {routes.simpleRoutes.map((route) => (
        <Route
          key={route.path}
          exact
          path={route.path}
          component={lazyRouter({
            loader: route.loader,
          })}
        />
      ))}
    </Switch>
  );
}

export default RoutesComponent;
