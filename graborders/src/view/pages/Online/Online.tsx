import React, { useEffect } from "react";
import "../styles/styles.css";
import { useSelector, useDispatch } from "react-redux";
import actions from "src/modules/category/list/categoryListActions";
import selector from "src/modules/category/list/categoryListSelectors";
import LoadingModal from "src/shared/LoadingModal";
function Online() {
  const dispatch = useDispatch();
  const record = useSelector(selector.selectRows);
  const loading = useSelector(selector.selectLoading);

  useEffect(() => {
    dispatch(actions.doFetch());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div>
      <div className="online__service">
        <h4>Customer Service</h4>
      </div>

      <div className="online__header">
        if you have any questions or encounter issues, please email us or chat
        with our online customer support team.
      </div>

      <div className="contact__list">
        {loading && <LoadingModal />}
        {!loading &&
          record &&
          record.map((item) => (
            <div className="contact__online">
              <div className="list__header">{item?.name} </div>
              <div className="online__image">
                <img
                  src={item?.photo[0]?.downloadUrl}
                  alt=""
                  className="customer__image"
                />
              </div>
              <div className="online__footer">
                {item.type === "whatsApp" ? (
                  <a
                    href={`https://wa.me/${item.number}`}
                    className="number__link"
                    target="_blank"
                  >
                    <div className="contact__now">
                      <i
                        className="fa-brands fa-whatsapp"
                        style={{ fontSize: 18 }}
                      ></i>
                      Contact now
                    </div>
                  </a>
                ) : (
                  <a
                    href={`https://t.me/${item.number}`}
                    className="number__link"
                    target="_blank"
                  >
                    <div className="contact__now __telegram">
                      <i
                        className="fa-brands fa-telegram"
                        style={{ fontSize: 18 }}
                      ></i>
                      Contact now
                    </div>
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Online;
