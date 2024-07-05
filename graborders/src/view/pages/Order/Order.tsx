import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "src/modules/record/list/recordListActions";
import selectors from "src/modules/record/list/recordListSelectors";
import LoadingModal from "src/shared/LoadingModal";
import Calcule from "src/view/shared/utils/Calcule";
import Dates from "src/view/shared/utils/Dates";
import Nodata from "src/view/shared/Nodata";

function Portfolio() {
  const [active, setActive] = useState("completed");
  const dispatch = useDispatch();
  const record = useSelector(selectors.selectRows);
  const loading = useSelector(selectors.selectLoading);
  const total = useSelector(selectors.selectTotal);
  const selectHasRows = useSelector(selectors.selectHasRows);
  // const [limit, setLimit] = useState<number>(10);
  // const count = useSelector(selectors.selectCount);

  useEffect(() => {
    const values = {
      status: active,
    };


    dispatch(actions.doFetch(values, values));
  }, [dispatch, active]);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
  //     if (count >= limit) {
  //       const values = {
  //         "status": active
  //       };
  //       setLimit(prevLimit => prevLimit + 10);
  //       dispatch(actions.doFetch(values, values, limit + 10));
  //     } else {
  //       return;
  //     }
  //   }
  // };

  const All = () => (
    <>
      {record.map((item, index) => (
        <div className="single__product" key={`${item.id}-${index}`}>
          <div className="order__time">
            <div>Order Time: {Dates.currentDate(item?.date)}</div>
            <div>Order Number: {item.number}</div>
          </div>
          <div className={`badge__ ${item?.status}`}>
            <label>{item?.status}</label>
          </div>
          <div className="product__image">
            <div className="image__">
              <img src={item?.product?.photo[0]?.downloadUrl} alt="" />
            </div>
            <div className="product__detail">
              <div className="detail__name">{item?.product?.title}</div>
              <div className="detail__price">
                <div>{item?.product?.amount}</div>
                <div>X 1</div>
              </div>
            </div>
          </div>
          <div className="bottom__cadre">
            <div className="cadre__detail">
              <div>Total order amount</div>
              <div>{item?.product?.amount} USDT</div>
            </div>
            <div className="cadre__detail">
              <div>Commission</div>
              <div>{item?.product?.commission}% </div>
            </div>
            <div className="cadre__detail">
              <div>Estimated return</div>
              <div>
                {Calcule.calcule__total(
                  item?.product?.amount,
                  item?.product?.commission
                )}{" "}
                USDT
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth :500, 
          margin:'auto'
        }}
      >
        <div className="header_order">
          <div className="order__header">
            <div className="order__record">Order Record</div>
          </div>
          <div className="order__background">
            <div className="order__remaining">
              <label htmlFor="" className="remaining__assets">
                 Availalbe assets
              </label>
              <span className="remaining__amount">
                {total}
                <span style={{ fontSize: 19 }}>USDT</span>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="order__list">
          <div className="list__actions">
            <div
              onClick={() => setActive("completed")}
              className={active === "completed" ? `active__order` : ""}
            >
              <span>Completed</span>
            </div>
            <div
              onClick={() => setActive("pending")}
              className={active === "pending" ? `active__order` : ""}
            >
              <span>Pending</span>
            </div>
            <div
              onClick={() => setActive("canceled")}
              className={active === "canceled" ? `active__order` : ""}
            >
              <span>Canceled</span>
            </div>
          </div>
        </div>
        <div className="list__product">
          {loading && <LoadingModal />}
          {!loading && record && <All />}
        </div>

        {!selectHasRows && <Nodata />}
      </div>
    </div>
  );
}

export default Portfolio;
