import React from 'react';

const ButtonIcon = (props) => {
  return props.loading ? (
    <div className="spinner"></div>
  ) : props.iconClass ? (
    <i className={props.iconClass} />
  ) : null;
};

export default ButtonIcon;
