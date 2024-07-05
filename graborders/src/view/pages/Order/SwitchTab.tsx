import React from "react";

function SwitchTab() {
  return (
    <div>
      <input type="radio" name="slider" id="list" />
      <input type="radio" name="slider" id="portfolio" />
      <nav>
        <label htmlFor="list" >Wash List Mode</label>
        <label htmlFor="portfolio" >Portfolio Mode</label>
      </nav>
    </div>
  );
}

export default SwitchTab;
