import styled from "styled-components";

const Wrapper = styled.section`
  background-image: url("https://goldsgym.in/assets/images/bg-2.jpg");
  position: relative;
  height: 65vh;

  &::before {
    position: absolute;
    background-color: rgba(0, 57, 97, 0.76);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
  }
  .container {
    z-index: 9999;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 1.5rem;

    span{
      color: ${({theme}) => theme.colors.white};
    }
    p{
      font-size: 2rem;
      color: ${({theme}) => theme.colors.white};
      max-width: 80rem;
      line-height: 1.5;
    }
  }
`;

const VideoSection = () => {
  return (
    <>
      <Wrapper className="section">
        <div className="container">
          <div>
            <picture>
              <img
                src="https://goldsgym.in/assets/frontend/images/ved-btn.png"
                alt=""
              />
            </picture>
          </div>
          <div>
            <picture>
              <img
                src="https://goldsgym.in/assets/frontend/images/line.png"
                alt=""
              />
            </picture>
          </div>
          <div>
            <h2 className="common-heading">THE FRANCHISEE <span>PERSPECTIVE</span></h2>
          </div>
          <div>
            <p>
              Hear what Gold’s Gym Franchisees have to say about the brand, the
              support they receive and the direction the industry is headed.
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default VideoSection;
