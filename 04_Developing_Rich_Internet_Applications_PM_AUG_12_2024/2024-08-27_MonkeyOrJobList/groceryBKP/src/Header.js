import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title ? title : "My List"}</h1>
    </header>
  );
};

// Header.defaultProps = {
//   title: "My List",
// };

export default Header;
