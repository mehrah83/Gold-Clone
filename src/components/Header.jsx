import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const MainHeader = styled.header`
  background: ${({ theme }) => theme.colors.purple};
  height: 9rem;
  padding: 1rem 4rem;
  display: flex;
  align-items: center;
  position: ${({ isVisible }) => (isVisible ? "fixed" : "static")};
  top: 0;
  width: 100%;
  z-index: 99999;
  gap: 1rem;
  picture {
    text-align: center;
    img {
      max-width: 5rem;
      height: auto;
      object-fit: cover;
      object-position: center;
    }
  }


  /*** Media-Queries Start ***/
  @media (max-width: ${({theme}) => theme.media.largeDevice}) {
    gap: 0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /*** Media-Queries End   ***/
`;
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const listenToScroll = () => {
    let height = 84;
    const winScroll = window.scrollY;
    // console.log(winScroll);
    if (winScroll > height) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <MainHeader className="flex" isVisible={isVisible}>
        <NavLink to="/">
          <picture>
            <img
              src="https://goldsgym.in/assets/images/21st%20Anniversary%20final%20logo%20Yellow.png"
              alt="Website logo"
            />
          </picture>
        </NavLink>
        <Navbar />
      </MainHeader>
    </>
  );
};

export default Header;
