import { Route, Redirect, useLocation } from "react-router-dom";
import permissionCheker from "../../../modules/auth/permissionChecker";
import LayoutPage from "src/view/layout/LayoutPage";

function PrivateRoute({component: Component,currentTenant, currentUser,permissionRequired, ...reset }) {
  const location = useLocation();
  return (
    <Route
      {...reset}
      render={(props) => {
        const permissionChecker = new permissionCheker(currentTenant,currentUser);
        if (!permissionChecker.isAuthenticated) {
          return (
            <Redirect
              to={{ pathname: "/auth/signin", state: { from: location } }}
            />
          );
        }

        if (permissionChecker.isEmptyPermissions) {
          return (
            <Redirect to="/auth/empty-permissions" />
          );
        }

        if (!permissionChecker.match(permissionRequired)) {
          return <Redirect to="/403" />;
        }
        return (
          <LayoutPage>
            <Component {...props} />
          </LayoutPage>
        );
      }}
    />
  );
}

export default PrivateRoute;
