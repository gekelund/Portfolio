import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { navLinks } from "./navLinks.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.nav`
  width: 100%;
  height: 100%;
`;

const UlWrapper = styled.ul`
  display: flex;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  height: 100%;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 1000px) {
    position: fixed;
    top: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: space-evenly;
    transition: 300ms ease all;
    height: 100%;
    background: white;
  }
`;

const Links = styled.li`
  flex-direction: row;
  list-style-type: none;
  padding: 0 20px;
  cursor: pointer;
  font-size: 1.33em;
  height: auto;
`;

const Menu = styled.figure`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    position: fixed;
    right: 0.5rem;
    top: 2rem;
    height: auto;
    cursor: pointer;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  color: black;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1000px) {
    padding: 0.8rem;
    height: 5rem;
    justify-content: flex-start;
  }
`;

const ResponsivNavigation = ({ hoverBackground }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <NavContainer>
      <UlWrapper style={navOpen ? { left: "0" } : { left: "-300px" }}>
        <Menu onClick={() => setNavOpen(!navOpen)}>
          <FontAwesomeIcon size="2x" icon={faBars} />
        </Menu>
        {navLinks.map((link, index) => (
          <StyledNavLink
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            onClick={() => setNavOpen(!navOpen)}
            style={{
              background:
                hoverIndex === index ? hoverBackground || "lightgray" : "",
              textDecoration: "none",
            }}
            key={link.text + link.icon}
            to={link.path}
            exact
          >
            <FontAwesomeIcon size="lg" key={link.icon} icon={link.icon} />
            <Links key={link.text}>{link.text}</Links>
          </StyledNavLink>
        ))}
      </UlWrapper>
    </NavContainer>
  );
};

export default withRouter(ResponsivNavigation);
