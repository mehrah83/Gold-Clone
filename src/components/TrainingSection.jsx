import styled from "styled-components";
import { TrainingItems } from "../Items/TrainingItems";

const Wrapper = styled.section`
.flex {
  align-items: center;
  justify-content: space-between;
}

@media (max-width: ${({theme}) => theme.media.mediumDevice}) {
  .flex{
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
}
@media (max-width: ${({theme}) => theme.media.mobile}) {
  img{
    width: 100%;
    height: 100%;
  }
}
`;
const TrainingSection = () => {
  return (
    <>
      <Wrapper className="section">
        <div className="container flex">
          {TrainingItems.map((currElem) => {
            return (
              <>
                <div key={currElem.id}>
                  <picture>
                    <img src={currElem.path} alt={currElem.alt} />
                  </picture>
                </div>
              </>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default TrainingSection;
