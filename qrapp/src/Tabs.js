import { useState } from "react";
import "./App.css";
import Scanner from "./Scanner";

import SeatPlan from "./seatPlan";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

    return (
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            QR Scan
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Seating
          </button>
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2>QR Scanner</h2>
            <hr />
            <p>
              <Scanner/>
            </p>
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h2>Seating </h2>
            <hr />
            <p>
              <SeatPlan/>
            </p>
          </div>
  
          
        </div>
      </div>
    );
  };
  


export default Tabs;