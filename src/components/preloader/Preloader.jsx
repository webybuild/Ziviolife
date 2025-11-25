import React from "react";
import { Puff } from "react-loader-spinner";
import "../preloader/Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <Puff color="silver" />
    </div>
  );
};

export default Preloader;
