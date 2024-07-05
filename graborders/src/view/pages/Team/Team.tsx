import React from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "src/modules/auth/authSelectors";

function Team() {
  const currentUser = useSelector(authSelectors.selectCurrentUser);

  return (
    <div>
      <SubHeader title="Profile" path="/profile" />

      <div className="profile__section">
        <label htmlFor=""></label>
        <div className="group__profile">
          <label htmlFor="">Full Name :</label>
          <span>{currentUser?.fullName}</span>
        </div>

        <div className="group__profile">
          <label htmlFor="">Email:</label>
          <span>{currentUser?.email}</span>
        </div>

        <div className="group__profile">
          <label htmlFor="">PhoneNumber:</label>
          <span>{currentUser?.phoneNumber}</span>
        </div>
        {currentUser?.username && (
          <div className="group__profile">
            <label htmlFor="">Country :</label>
            <span>{currentUser?.username}</span>
          </div>
        )}

        <div className="group__profile">
          <label htmlFor="">Invitaion Code :</label>
          <span>{currentUser?.invitationcode}</span>
        </div>
      </div>
    </div>
  );
}

export default Team;
