import React, { useState } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";

export default function Tasks() {
  const [active, setActive] = useState("all");

  return (
    <div>
      <SubHeader title="Tasks" path="/profile" />
      <div className="order__list">
        <div className="list__actions">
          <div
            className={active === "all" ? `active__order` : ""}
            onClick={() => setActive("all")}
          >
            <span className="">All</span>
          </div>
          <div
            onClick={() => setActive("pending")}
            className={active === "pending" ? `active__order` : ""}
          >
            {" "}
            <span>Pending</span>
          </div>
          <div
            onClick={() => setActive("completed")}
            className={active === "completed" ? `active__order` : ""}
          >
            {" "}
            <span>Completed</span>
          </div>
          <div
            onClick={() => setActive("canceled")}
            className={active === "canceled" ? `active__order` : ""}
          >
            {" "}
            <span>Canceled</span>
          </div>
        </div>
      </div>
    </div>
  );
}
