import React from "react";
import "./currencyStyle.css";
import axios from "axios";
import authAxios from "../../../modules/shared/axios/authAxios";
function CurrecnyPage() {
  const searchCurrency = (e) => {
    const data = e.target.value;
    const response = authAxios.get(`/list/currency?search=${data}`, data);

  };
  return (
    <div className="search__page">
      <div className="search__input">
        <i className="fa fa-search" />
        <input
          type="text"
          placeholder="search"
          className="search"
          onChange={(e) => searchCurrency(e)}
        />
      </div>
    </div>
  );
}

export default CurrecnyPage;
