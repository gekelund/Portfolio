import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { navLinks } from "./navLinks.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResponsivNavigation = ({ hoverBackground }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav>
      <ul style={navOpen ? { left: "0px" } : { left: "-240px" }}>
        <figure onClick={() => setNavOpen(!navOpen)}>
          <p>G</p>
        </figure>
        {navLinks.map((link, index) => (
          <NavLink
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            style={{
              background: hoverIndex === index ? hoverBackground || "blue" : "",
            }}
            key={link.text + link.icon}
            to={link.path}
            exact
          >
            <FontAwesomeIcon key={link.icon} icon={link.icon} />
            <li key={link.text}>{link.text}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default withRouter(ResponsivNavigation);
