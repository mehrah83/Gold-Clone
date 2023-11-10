import styled from "styled-components";
import { FitnessInstituteItem } from "../Items/FitnessInstituteItem";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";


const Wrapper = styled.section`
background-image: url("https://goldsgym.in/assets/frontend/css/workbaner.jpg");
background-attachment: fixed;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
padding: 5rem 0rem;
height: 80vh;
position: relative;
z-index: 9999;

&::before {
  background-color: rgba(0, 57, 97, 0.76);
  content: "";
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  text-align: center;

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  .btn{
    color: ${({ theme }) => theme.colors.black};
    padding: 0.5rem 2rem;
  }
}

@media (max-width: ${({theme}) => theme.media.largeDevice}) {
height: auto;
}

@media (max-width: ${({theme}) => theme.media.mediumDevice}) {
  .grid-four-column{
    grid-template-columns: repeat(2,1fr);
  }
}

@media (max-width: 600px){
  .grid-four-column{
    grid-template-columns: repeat(1,1fr);
  }
}
`;
const FitnessInstitute = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <picture>
            <img
              src="https://goldsgym.in/assets/frontend/images/line.png"
              alt=""
            />
          </picture>
          <h2 className="common-heading">Gold Gym Fitness Institute</h2>
          <p>Physical Activity Or Can Improve Your Health</p>
        </div>
        <div className="container">
            <div className="grid grid-four-column">
          {FitnessInstituteItem.map((currElem) => {
            return (
              <>
                <picture key={currElem.id}>
                  <img src={currElem.src} alt={currElem.alt} />
                </picture>
              </>
            );
          })}
        </div>
        <Button>
            <NavLink className="btn">Know More</NavLink>
          </Button>
        </div>
      </Wrapper>
    </>
  );
};

export default FitnessInstitute;
