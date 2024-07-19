import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import categoryService from "src/modules/category/categoryService";
import { Link } from 'react-router-dom';

function contactUs() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const fetch = async () => {
    const response = await categoryService.findCs();
    setData(response);
  };
  useEffect(() => {
    fetch();
  }, [dispatch]);

  return (
    <div className="auth__page">
      <div className="contact__header">
        <div className="go__back">
        <Link to={"/auth/signin"}>
        <i className="fa-solid fa-arrow-left" style={{color:"#Fff"}} />
        </Link>
        </div>
        <h3>Customer service</h3>
      </div>
      <div className="conatct__us">
        {data.map((item) => (
            <a
              href={`https://wa.me/${item?.number}`}
              className="whatsapp__"
              target="_blank"
            >
              <img
                src="/images/whatsapp.png"
                style={{ width: 70 }}
                key={item + "10"}
              />
              <span>WhatsApp</span>
            </a>
      
        ))}
      </div>
    </div>
  );
}

export default contactUs;
