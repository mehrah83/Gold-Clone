import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { PreSaleItem } from "../Items/PreSaleItem";



const Wrapper = styled.section`
h2 {
  span {
    color: ${({ theme }) => theme.colors.anotherBlack};
  }
  text-align: center;
}

p {
  text-align: center;
  margin-bottom: 3rem;
}

.box {
  border: 0.3rem solid ${({ theme }) => theme.colors.black};
  filter: drop-shadow(0 0 6.5px rgba(0, 0, 0, 0.11));
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  transition: all 0.5s ease-in;
  cursor: pointer;

  &:hover,
  &:active {
    transform: translateY(-0.5rem);
  }
  h4 {
    font-family: Montserrat, sans-serif;
  }
  .btn {
    border: 0.1rem solid ${({ theme }) => theme.colors.black};
    padding: 0.5rem 2rem;
  }
}

@media (max-width: ${({theme}) => theme.media.mediumDevice}) {
  .grid-three-column{
    grid-template-columns: repeat(2,1fr);
  }
}
@media (max-width: ${({theme}) => theme.media.mobile}) {
  .box{
    h4{
      text-align: center;
    }
  }
}
@media (max-width: 500px) {
  .grid-three-column{
    grid-template-columns: repeat(1,1fr);
    .box{
      padding: 3rem;
    }
  }
}
`;
const PreSaleSection = () => {
  return (
    <>
      <Wrapper className="section">
        <div className="container">
          <h2 className="common-heading">
            <span>PRE-SALE OFFERS</span> HAVE BEGUN
          </h2>
          <p>BOOK NOW FOR SPECIAL RATES</p>
        </div>
        <div className="container grid grid-three-column">
          {PreSaleItem.map((currElem) => {
            return (
              <>
                <div className="box" key={currElem.id}>
                  <h4>{currElem.info}</h4>
                  <Button className="btn">
                    <NavLink>View</NavLink>
                  </Button>
                </div>
              </>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default PreSaleSection;
