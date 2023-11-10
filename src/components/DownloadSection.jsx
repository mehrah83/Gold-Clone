import styled from "styled-components";
import { ButtonOutline } from "../styles/ButtonOutline";


const Wrapper = styled.section`
background-image: url("${props => props.backgroundImage}");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height: 40vh;
display: flex;
align-items: center;
position: relative;
z-index: 9999;

&::before {
  background-color: rgba(0,57,97,.76);
  content: "";
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.flex {
  align-items: center;
  gap: 7rem;
  p {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
  }
  .btn {
    padding: 1rem 3rem;
  }
}

@media (max-width: ${({theme}) => theme.media.mediumDevice}) {
  .flex{
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: ${({theme}) => theme.media.mobile}) {
  height: auto;
  text-align: center;
  padding: 2rem;

  .flex{
    gap: 3rem;
  }
}
`;
const DownloadSection = (props) => {
  return (
    <>
      <Wrapper backgroundImage={props.backgroundImage}>
        <div className="container flex">
          <div>
            <h1>{props.mainHeading}</h1>
          </div>
          <div>
            <h2 className="common-heading">
              {props.heading}
            </h2>
            <p>
              {props.para}
            </p>
          </div>
          <ButtonOutline className="btn">{props.btnContent}</ButtonOutline>
        </div>
      </Wrapper>
    </>
  );
};

export default DownloadSection;
