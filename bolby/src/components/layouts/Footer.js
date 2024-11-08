import React from "react";

function Footer({ light }) {
  return (
    <footer className={light ? "footer light" : "footer"}>
      <div className="container">
        <span className="copyright">
          &copy; {new Date().getFullYear()} kamran Template.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
