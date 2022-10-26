import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Navbar</h1>
      <div className="links">
        <a href="/create">New</a>
        <a
          href="/"
          style={{
            color: "#ffffff",
            backgroundColor: "#0b9ea3",
            borderRadius: "10px",
            hoverBackgroundColor: "#000000",
          }}
        >
          List
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
