import React from "react";

const Footer = ({ length }) => {

  return (
    <footer>
      <p>
        {length} Type of {length === 1 ? "monkey" : "monkeys"}
      </p>
      {/* <p>Copy Right &copy; {today.getFullYear()}</p> */}
    </footer>
  );
};

export default Footer;
