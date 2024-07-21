import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import categoryService from "src/modules/category/categoryService";
import { Link } from 'react-router-dom';


interface Photo {
  downloadUrl: string;
}

interface Item {
  name: string;
  photo: Photo[];
  type: string;
  number: string;
}
function contactUs() {
  const dispatch = useDispatch();
  const [data, setData] = useState<Item[]>([]);



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
      <div className="contact__list">
        {data.map((item) => (
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

export default contactUs;
