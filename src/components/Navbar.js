import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { MdFilterHdr } from "react-icons/md";
import { FaBars as Hamburger, FaTimes as HamburgerX } from "react-icons/fa";

const StyledNavbar = styled.div`
  background: #006e80;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
`;
const HeaderTitle = styled(Link)`
  color: #ffeedd;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled(MdFilterHdr)`
font-size: 3rem;
  margin-right: 0.2rem;
`;

const TitleAccent = styled.span`
  color: #f4907b;
`;

const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    background: ${({ active }) => (active ? '#83bdb0' : 'transparent')};
    left: ${({ active }) => (active ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

const NavLink = styled(Link)`
color: #fed;
  display: flex;
  font-size:1.5rem;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    transform: scale(1.2);
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
    color: #f57350;
    transform: scale(1.5);
    transition: all 0.3s ease;
    } 
  }

`

const NavItem = styled.li`
    height: 80px;
  border-bottom: 5px solid transparent;
  &:hover {
    border-bottom: 5px solid #f4907b;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    border: none;
    &:hover {
    border: none;
  }
  }
`

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick((click) => !click);
    };

    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <IconContext.Provider value={{ color: "#fed" }}>
                <StyledNavbar>
                    <NavbarContainer>
                        <HeaderTitle to="/" onClick={closeMobileMenu}>
                            <HeaderLogo />
                            <p>
                                <TitleAccent>John</TitleAccent>Lawver
                            </p>
                        </HeaderTitle>
                        <MenuIcon>
                            {click ? (
                                <HamburgerX onClick={handleClick} />
                            ) : (
                                    <Hamburger onClick={handleClick} />
                                )}
                        </MenuIcon>
                        <NavMenu active={click}>
                            <NavItem>
                                <NavLink to="/" onClick={closeMobileMenu}>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/projects" onClick={closeMobileMenu}>
                                    Projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/about" onClick={closeMobileMenu}>
                                    About
                                </NavLink>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </StyledNavbar>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
