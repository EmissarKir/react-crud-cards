import React from "react";
import "./layoutCardPage.css";

const LayoutCardPage = ({ children }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 mx-auto my-auto">
          <div className="card shadow p-3 p-md-5 card__list">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutCardPage;
