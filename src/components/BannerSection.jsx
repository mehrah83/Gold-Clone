import styled from "styled-components";
const Wrapper = styled.section`
  .banner {
    background-image: url("${props => props.backgroundImage}");
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-size: ${props => props.backgroundSize};
    background-blend-mode: ${props => props.backgroundBlendMode};
    background-color: ${props => props.backgroundColor};

    p{
      color: ${({theme}) => theme.colors.white};
      font-size: 2rem;
      margin-top: 1rem;
    }

    .cloud {
      position: absolute;
      content: "";
      bottom: -0.5rem;
    }
  }

  @media (max-width: 500px) {
    .banner{
      .common-heading{
        text-align: center;
      }
    }
  }
`;
const BannerSection = (props) => {
  return (
    <>
      <Wrapper backgroundImage={props.backgroundImage} backgroundSize={props.backgroundSize} backgroundBlendMode={props.backgroundBlendMode} backgroundColor={props.backgroundColor}>
        <div className="banner">
          <h2 className="common-heading">{props.heading}</h2>
          <p>{props.para}</p>
          <div className="cloud">
            <picture>
              <img src="https://goldsgym.in/assets/images/cloud.png" alt="" />
            </picture>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default BannerSection;
