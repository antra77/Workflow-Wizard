/* eslint-disable react/prop-types */
import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-8">
      <p className="text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-blue-900">
        {title}
      </p>
    </div>
  );
};

export default Header;
