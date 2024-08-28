import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Popup from "./Components//popup/popup.jsx";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Navbar />
      <div className="App">
        <button onClick={() => setShowPopup(true)} className="btn">
          Open Popup
        </button>
        <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
          <h2>Webste info</h2>
          <p>This website is under Construction</p>
        </Popup>
      </div>
    </>
  );
};

export default App;
