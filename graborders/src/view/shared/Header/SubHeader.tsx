import React from "react";
import { useHistory } from 'react-router-dom';

function SubHeader(props) {
  const history = useHistory();

  const goBack = () => {
    history.goBack(); // This will take you back to the previous page
  };
  return (
    <div>
      <div className="subpage__header">
        <div className="arrow__back" onClick={() => goBack()}>
            {props.title === "WithDraw" ? (
              <i className="fa-solid fa-arrow-left arrowleft"></i>
            ) : (
              <i className="fa-solid fa-arrow-left arrowleft"></i>
            )}
        </div>
        <h3>{props?.title}</h3>
        <div></div>
      </div>
    </div>
  );
}
export default SubHeader;
