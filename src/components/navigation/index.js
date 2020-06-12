import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { navLinks } from "./navLinks.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "../../utility";

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  background-color: #232323;

  @media screen and (max-width: 768px) {
    position: fixed;
    right: 0;
    top: 0;
    transition: 300ms ease all;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 50%;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    transition: 300ms ease all;
    flex-direction: column;
    height: 100%;
  }
`;

const Links = styled.li`
  list-style: none;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const Menu = styled.figure`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    height: auto;
    z-index: 2;
    background-color: orange;
    padding: 1.2rem;
    border-radius: 50%;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition-timing-function: ease-in-out;
  transition: 0.4s;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;

  &.active {
    color: orange;
    transition-timing-function: ease-in-out;
    transition: 0.4s;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
  }
  @media screen and (max-width: 768px) {
    transform: translate(0px);

    &.active {
      transform: translate(0px);
    }
  }
`;

const ResponsivNavigation = ({ hoverColor }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);
  const SmallScreenSize = useMediaQuery("(max-width: 768px)");

  return (
    <NavContainer
      style={
        SmallScreenSize
          ? navOpen
            ? { bottom: "0", top: "0" }
            : { bottom: "-100%", top: "unset" }
          : { bottom: "unset" }
      }
    >
      <UlWrapper style={navOpen ? { bottom: "150px" } : { bottom: "-90%" }}>
        <Menu onClick={() => setNavOpen(!navOpen)}>
          <FontAwesomeIcon size="2x" icon={faBars} />
        </Menu>
        {navLinks.map((link, index) => (
          <StyledNavLink
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            onClick={() => setNavOpen(!navOpen)}
            style={{
              color: hoverIndex === index ? hoverColor || "orange" : "",
              textDecoration: "none",
            }}
            key={link.textDecoration}
            to={link.path}
            exact
          >
            <Links key={link.text}>{link.text}</Links>
          </StyledNavLink>
        ))}
      </UlWrapper>
    </NavContainer>
  );
};

export default withRouter(ResponsivNavigation);
