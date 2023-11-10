import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { ButtonOutline } from "../styles/ButtonOutline";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { useState } from "react";

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    align-items: center;
  }

  li {
    position: relative;
    padding: 0 2rem;
  }

  .navbar-link {
    color: #fff;
    text-decoration: none;
    font-size: 1.3rem;
    font-family: "Lato", sans-serif;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
  }

  .navbar-link.active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }

  .dropdown {
    display: none;
    width: 25rem;
    position: absolute;
    top: 2rem;
    left: 0;
    background-color: black;
    padding: 1rem;
    z-index: 100;
  }

  li:hover .dropdown {
    display: block;
  }

  .dropdown-link {
    font-size: 1.4rem;
    color: white;
    text-decoration: none;
    display: block;
    padding: 0.5rem 0;
  }

  .mobile-nav-btn {
    display: none;

    .close-outline {
      display: none;
    }
  }

  .mobile-nav-btn[name="close-outline"] {
    display: none;
  }

  @media (max-width: ${({theme}) => theme.media.largeDevice}){
    .mobile-nav-btn{
      display: inline-block;
      z-index: 9999;
    }

    .mobile-nav-icon{
      font-size: 3rem;
      color: ${({theme}) => theme.colors.primary};
    }

    .navbar-list{
      position: absolute;
    visibility: hidden;
    opacity: 0;
    z-index: 9999;
    background: #000;
    width: 30vw;
    height: 100vh;
    transform: translateX(-100%);
    transition: all 0.2s ease-in;
    top: 0;
    left: 0;
    display: flex;
    gap: 3rem;
    padding: 5rem 1rem;
    align-items: flex-start;
    flex-direction: column;

    .btn{
      width: 25vw;
    }
    }

    .active .navbar-list{
      visibility: visible;
    opacity: 1;
    transform: translateX(0%);
    }

    .active .mobile-nav-icon{
      display: none;
      color: ${({theme}) => theme.colors.primary};
      top: 30%;
      right: 10%;
      z-index: 9999;
      font-size: 3rem;
    }

    .active .close-outline{
         display: inline-block;
    }
  }
  @media (max-width: ${({theme}) => theme.media.mobile}) {
    .navbar-list{
      width: 50vw;
      .btn{
        width: 40vw;
      }
    }
  }
  @media (max-width: 500px) {
    .navbar-list{
      width: 70vw;
      .btn{
        width: 50vw;
      }
    }
  }
`;

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <Nav>
      <div className={isMenu && "active"}>
        <ul className="navbar-list">
          <li>
            <div className="navbar-link">
              Get Started
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
            <ul className="dropdown">
              <li>
                <NavLink className="dropdown-link" to="">
                  Our Gyms India
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Our Gyms Nepal
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Coming Soon
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Pre-Sales
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Amazing Offers
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Buy Membership now
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Calender 2020
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Our Events
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Our vendor Partners
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <div className="navbar-link">
              Fitness Institute - GGFI
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
            <ul className="dropdown">
              <li>
                <NavLink className="dropdown-link" to="">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Our Faculty
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Certification & Accredetations
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Buy a course
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/gallery" className="navbar-link" onClick={() => setIsMenu(false)}>
              Gallery
            </NavLink>
          </li>
          <li>
            <div className="navbar-link">
              Programs
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
            <ul className="dropdown">
              <li>
                <NavLink className="dropdown-link" to="">
                  Corporate Memberships
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Personal Training Program
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Quick Result Program
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Group Program
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Corporate Wellness Program
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/franchise" className="navbar-link" onClick={() => setIsMenu(false)}>
              Franchise
            </NavLink>
          </li>
          <li>
            <NavLink to="/advertise" className="navbar-link" onClick={() => setIsMenu(false)}>
              Advertise With Us
            </NavLink>
          </li>
          <li>
            <div className="navbar-link">
              Convention
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
            <ul className="dropdown">
              <li>
                <NavLink className="dropdown-link" to="">
                  Bangkok 2023
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Dubai 2022
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Kuala Lampur 2029
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="">
                  Kochi 2018
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link" onClick={() => setIsMenu(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <ButtonOutline className="btn">
              <NavLink to="" className="navbar-link btn-link">
                Free Trail
              </NavLink>
            </ButtonOutline>
          </li>
          <li>
            <Button className="btn btn-2">
              <NavLink
                to="*"
                className="navbar-link btn-link"
                style={{ color: "black" }}
              >
                Join Now
              </NavLink>
            </Button>
          </li>
        </ul>
        <div className="mobile-nav-btn">
        <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={() => setIsMenu(true)}/>
        <CgCloseR
          name="close-outline"
          className="close-outline mobile-nav-icon"
          onClick={() => setIsMenu(false)}
        />
      </div>
      </div>
    </Nav>
  );
};

export default Navbar;
