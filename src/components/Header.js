import React from "react";
import rea from "../images/react_2.png";


const Header = () => {
  return (
    <div className="fixed">
      <div className="container center">

        <h2 className="mb-3"> <img src={rea} alt="react" width="80"/> Single-Page Application </h2>

      </div>
    </div>
  );
};


export default Header;
