import React from "react";
import { useDispatch } from "react-redux";
import { i18n } from "../../../i18n";
import actions from "src/modules/auth/authActions";

function EmptyPermissionsPage() {
  const dispatch = useDispatch();

  const doSignout = () => {
    dispatch(actions.doSignout());
  };

  return (
    <div className="empty__page">
      <div
        className="imgEle"
        style={{
          backgroundImage: `url(/icons/permission.png)`,
        }}
      />
      <div className="empty__text">
        <h3>{i18n("auth.emptyPermissions.message")}</h3>
        <button
          className="btn btn-sm btn-link"
          type="button"
          onClick={doSignout}
        >
          {i18n("auth.signout")}
        </button>
      </div>
    </div>
  );
}

export default EmptyPermissionsPage;
