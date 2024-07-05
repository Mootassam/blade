import React, { useEffect, useState } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import action from  'src/modules/transaction/list/transactionListActions'
import selector from 'src/modules/transaction/list/transactionListSelectors'
import { useDispatch, useSelector } from 'react-redux';
import Dates from "src/view/shared/utils/Dates";
import LoadingModal from "src/shared/LoadingModal";
import Nodata from "src/view/shared/Nodata";

function Transaction() {
  const [active, setActive] = useState("withdraw");
  const dispatch = useDispatch();
 const loading = useSelector(selector.selectLoading)
 const selectHasRows = useSelector(selector.selectHasRows)

  const fetchAll =() => { 
    const  values ={ 
      type : active
    }
    dispatch(action.doFetchByUser(values,values))
  }
  useEffect(() => {
    fetchAll()
  }, [dispatch,active])
  
  const record = useSelector(selector.selectRows)

  const deposit =() => { 
    setActive("deposit")
    const  values = { 
      type : 'deposit'
    }

    dispatch(action.doFetchByUser(values))

  }


  const withdraw =() => { 
    setActive("withdraw")
    const  values ={ 
      type : 'withdraw'
    }
    dispatch(action.doFetchByUser(values,values))
  }

  const all = (item) => {
    return (
      <div className="content__transaction">
        <div className="transaction__left">
          <div  className={`transaction__right ${item.status === 'canceled' ?'red' : item.status === 'pending' ? 'pendings' :'' }`}>{item.status}</div>
          <div className="transaction__date">{Dates.Date(item?.createdAt)}</div>
        </div>
        <div className={`transaction__right ${item.status === 'canceled' ?'red' : item.status === 'pending' ? 'pendings' :'' }`} >${item?.amount}</div>
      </div>
    );
  };

  return (
    <div>
      <SubHeader title="Transaction" path="/profile" />
      <div className="order__list">
        <div className="list__transaction">
          <div
            className={active === "" ? `active__transacttion` : ""}
            onClick={() => setActive("")}
          >
            <span className="">All</span>
          </div>
          <div
            onClick={() => withdraw()}
            className={active === "withdraw" ? `active__transacttion` : ""}
          >
            {" "}
            <span>Withdraw</span>
          </div>
          <div
            onClick={() => deposit()}
            className={active === "deposit" ? `active__transacttion` : ""}
          >
            <span>Deposit</span>
          </div>
        </div>
      </div>

      <div className="transaction__content">
        {loading && <LoadingModal />}
        {!loading && record &&  record.map((item) => all(item))}
        {!selectHasRows && <Nodata />}
      </div>
    </div>
  );
}

export default Transaction;
