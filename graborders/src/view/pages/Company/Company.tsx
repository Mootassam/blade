import React, { useEffect } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import actions from 'src/modules/company/list/companyListActions'
import selectors from 'src/modules/company/list/companyListSelectors' 
import { useDispatch, useSelector } from "react-redux";
import LoadingModal from "src/shared/LoadingModal";

function Company() {
  const dispatch = useDispatch();

  const record = useSelector(selectors.selectRows); 
  const loading = useSelector(selectors.selectLoading);

  const doFetch = () => { 
    dispatch(actions.doFetch());
  };

  useEffect(() => {
    doFetch();
  }, [dispatch]);

  return (
    <div>
      <SubHeader title="Company" path="/" />
      <div className="detaill__company" style={{ whiteSpace: 'pre-line' }}>
      {loading && <LoadingModal />}
        {record && record[0]?.companydetails && (
          <p dangerouslySetInnerHTML={{ __html: record[0]?.companydetails }}  style={{color:"black"}}/>
        )}
      </div>
    </div>
  );
}

export default Company;
