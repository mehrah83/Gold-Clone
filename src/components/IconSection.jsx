import styled from "styled-components";
import { IconItems } from "../Items/IconItems";


const Wrapper = styled.section`
.container {
  .common-heading:nth-child(1) {
    color: ${({ theme }) => theme.colors.anotherBlack};
    font-weight: 900;
    text-align: center;
  }
  .common-heading:nth-child(2) {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 900;
    text-align: center;
  }
}
.flex {
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  div {
    text-align: center;
    p {
      font-weight: 900;
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 1.6rem;
      margin-top: 2rem;
    }
  }
}

@media (max-width: 900px) {
  .flex{
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
}

@media (max-width: 500px) {
  .flex{
    flex-direction: column;
  }
}
`;
const IconSection = () => {
  return (
    <>
      <Wrapper className="section">
        <div className="container">
          <h2 className="common-heading">We can give you</h2>
          <h2 className="common-heading">Much More Than Others</h2>
        </div>
        <div className="container flex">
          {IconItems.map((currElem) => {
            return (
              <>
                <div key={currElem.id}>
                  <picture>
                    <img src={currElem.image} alt={currElem.alt} />
                  </picture>
                  <p>{currElem.info}</p>
                </div>
              </>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default IconSection;
