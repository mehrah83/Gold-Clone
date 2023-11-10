import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .top-btn {
    background: ${({ theme }) => theme.colors.primary};
    position: fixed;
    z-index: 99999;
    bottom: 4rem;
    right: 4rem;
    border-radius: 50%;
    box-shadow: 0 0 5px 0 rgba(255, 255, 255, 0.1);
    height: 5rem;
    width: 5rem;
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(winScroll);

    if (winScroll > heightToHidden) {
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
      <Wrapper>
        {isVisible && (
          <div className="top-btn" onClick={goToBtn}>
            <i className="fa-solid fa-chevron-up"></i>
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default ScrollToTop;
