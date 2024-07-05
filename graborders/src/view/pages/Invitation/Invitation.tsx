import React, { useRef, useEffect } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import authSelectors from "src/modules/auth/authSelectors";
import Message from "src/view/shared/message";
import selectors from "src/modules/company/list/companyListSelectors";
import listactions from "src/modules/company/list/companyListActions";
import { useDispatch, useSelector } from "react-redux";

function Invitation() {
  const dispatch = useDispatch();

  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const referenceCodeRef = useRef<any>(null);
  const copyToClipboard = () => {
    const referenceCode = referenceCodeRef.current.innerText;

    // Check if the browser supports the modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(referenceCode)
        .then(() => {
          alert("Copied to clipboard:");
          // You can add any additional logic here, such as showing a success message
        })
        .catch((error) => {
          console.error("Error copying to clipboard:", error);
          // You can handle errors here, such as displaying an error message to the user
        });
    } else {
      // Fallback for browsers that do not support the modern clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = referenceCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      Message.success("Copied");

      // You can add any additional logic here for the fallback mechanism
    }
  };

  const dolistCompany = () => {
    dispatch(listactions.doFetch());
  };

  const logorecord = useSelector(selectors.selectRows);
  const loadingImage = useSelector(selectors?.selectLoading);
  useEffect(() => {
    dolistCompany();

    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className="app__invitation">
      <SubHeader title="Invitation" path="/" />

      <div className="invitation__absolute"></div>
      <div className="invitation__content">
        <div className="invitation__logo">
          {logorecord.map((item) => (
            <>
              <span>{item.name}</span>
              {!loadingImage && item?.photo[0]?.downloadUrl && (
                <img
                  src={item?.photo[0]?.downloadUrl}
                  alt=""
                  className="logo__header"
                />
              )}
              {!loadingImage && !item?.photo[0]?.downloadUrl && (
                <img
                  src="/images/invitation/logo.png"
                  alt=""
                  className="invitation__"
                />
              )}
            </>
          ))}
        </div>
        <div className="invitation__details">
          <span>My Referral Code</span>
          <span
            className="reference__code"
            ref={referenceCodeRef}
            style={{ cursor: "pointer" }}
          >
            {currentUser?.refcode}
          </span>
          <div className="invitation__button" onClick={copyToClipboard}>
            Copy referral Code
          </div>
        </div>
      </div>
    </div>
  );
}
export default Invitation;
