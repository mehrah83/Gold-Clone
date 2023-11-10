import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.black};
  position: fixed;
  z-index: 99999;
  bottom: 0;
  width: 100%;
  padding: 1rem;

  .flex {
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .common-heading {
      color: ${({ theme }) => theme.colors.white};
    }
    .btn {
      color: ${({ theme }) => theme.colors.black};
      font-weight: 500;
      font-size: 2rem;
    }
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    .flex{
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      .common-heading{
        text-align: center;
      }
    }
  }
`;

const ScrollToFranchise = () => {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let height = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

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
      {isVisible && (
        <Wrapper>
          <div className="container flex">
            <h2 className="common-heading">
              Become A Gold Gym Franchise Owner Today!
            </h2>
            <Button>
              <NavLink className="btn">Join Now</NavLink>
            </Button>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default ScrollToFranchise;
