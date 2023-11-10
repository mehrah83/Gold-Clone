import { useState } from "react";
import styled from "styled-components";
import { MillionItems } from "../Items/MillionItems";


const Wrapper = styled.section`
  padding: 5rem;
  background: ${({ theme }) => theme.colors.black};

  .grid-four-column {
    .box {
      background-color: #07060b;
      max-width: 25vw;
      padding: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      small {
        color: #ccc;
        font-size: 1.2rem;
      }
      .common-heading {
        color: ${({ theme }) => theme.colors.white};
        text-align: center;
      }
      hr {
        border-color: ${({ theme }) => theme.colors.primary} !important;
      }
      p {
        color: ${({ theme }) => theme.colors.white};
        text-align: center;
      }
    }
  }

  @media (max-width: 600px){
    .grid-four-column{
      grid-template-columns: repeat(2,1fr);

      .box{
        max-width: 100%;
      }
    }
  }

  @media (max-width: 500px) {
    .grid-four-column{
      grid-template-columns: repeat(1,1fr);
    }
  }
`;

const MillionSection = () => {
  const [item, setItem] = useState(MillionItems);
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="grid grid-four-column">
            {item.map((currElem) => {
              return (
                <>
                  <div className="box">
                    <small>Over</small>
                        <h2 className="common-heading">{currElem.heading}</h2>
                    <hr /> 
                    <p>{currElem.para}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default MillionSection;
