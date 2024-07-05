import React from "react";
import "../styles/styles.css";
function PortfolioMode() {
  return (
    <div>
      <div className="portfolio__dashboard">
        <div className="profile__firstlinge">
          <div>My Portfolio</div>
          <div> actions</div>
        </div>
        <div>
          <h2>$42,163.07</h2>
        </div>

        <div className="profile__change">
          <div className="change">
            <p>24H change</p>
            <p>+$750.62(1.81%)</p>
          </div>
          <div className="loss">
            <p>Total Profit/Loss</p>
            <p>+$750.62(1.81%)</p>
          </div>
        </div>
      </div>

      <div className="portfolio__options">
        <div>USD/BTC</div>
        <div>
          <select>
            <option value="holdings">1H</option>
            <option value="holdings">24H</option>
            <option value="holdings">1D</option>
            <option value="holdings">1M</option>
            <option value="holdings">1Y</option>
            <option value="holdings">5Y</option>
          </select>
        </div>
        <div>
          <select>
            <option value="holdings">Holdings</option>
            <option value="holdings">P&L</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PortfolioMode;
