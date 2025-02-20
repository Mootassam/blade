import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import selectors from 'src/modules/vip/vipSelectors';

function VipListItem(props) {
  const hasPermissionToRead = useSelector(
    selectors.selectPermissionToRead,
  );
  const valueAsArray = () => {
    const { value } = props;
    if (!value) {
      return [];
    }
    if (Array.isArray(value)) {
      return value;
    }
    return [value];
  };

  const displayableRecord = (record) => {
    if (hasPermissionToRead) {
      return (
        <div key={record.id}>
          <Link
            className="btn btn-link"
            to={`/vip/${record.id}`}
          >
          <span className='vip'>  {record.title} </span>
          </Link>
        </div>
      );
    }
    return <div key={record.id}>{record.title}</div>;
  };

  if (!valueAsArray().length) {
    return null;
  }

  return (
    <>
      {valueAsArray().map((value) =>
        displayableRecord(value),
      )}
    </>
  );
}

VipListItem.propTypes = {
  value: PropTypes.any,
};

export default VipListItem;
