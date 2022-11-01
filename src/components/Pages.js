import React from "react";
import { useState } from "react";

const Pages = ({ option }) => {
  const { name, icon } = option;
  return (
    <div className="each-page">
      {icon} {name}
    </div>
  );
};

export default Pages;
