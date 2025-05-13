import React from "react";

function Footer() {
  const getFullYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {getFullYear}</p>
    </footer>
  );
}

export default Footer;
