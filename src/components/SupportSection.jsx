import { useState } from "react";
import styled from "styled-components";
import { SupportItems } from "../Items/SupportItems";

const Wrapper = styled.section`
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    .common-heading {
      color: ${({ theme }) => theme.colors.anotherBlack};
      span {
        color: ${({ theme }) => theme.colors.black};
      }
    }
    p {
      color: #333;
      font-size: 1.5rem;
      line-height: 1.5;
      text-align: center;
    }

    .box {
      .box-image {
        background-image: url("https://goldsgym.in/assets/frontend/images/g2.jpg");
        height: 44vh;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        &:before {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background: rgba(0, 0, 0, 0.5);
        }
        .common-heading {
          color: ${({ theme }) => theme.colors.white};
          z-index: 9999;
          position: relative;
        }
      }
      .box-info {
        box-shadow: 0rem 0rem 1rem #ccc;
        padding: 2rem 4rem;

        .grid-two-column {
          gap: 2rem;
          li {
            font-size: 1.4rem;
            list-style: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            &::before {
              content: "✓";
              font-weight: 900;
            }
          }
        }
      }
      .yellow {
        background-color: ${({ theme }) => theme.colors.primary};
        height: 0.5rem;
        width: 100%;
      }
    }
  }

  @media (max-width: 600px){
    .container{
      .grid-two-column{
      grid-template-columns: repeat(1,1fr);
    }
    .box-info{
      .grid-two-column{
        grid-template-columns: repeat(2,1fr);
      }
    }
    }
  }

  @media (max-width: 500px){
    .common-heading{
      text-align: center;
    }
  }
`;

const SupportSection = () => {
  const [items, setItems] = useState(SupportItems);
  return (
    <>
      <Wrapper className="section">
        <div className="container">
          <picture>
            <img src="https://goldsgym.in/assets/images/line.png" alt="" />
          </picture>
          <h2 className="common-heading">
            WORLD CLASS <span>SUPPORT</span>
          </h2>
          <p>
            With 50 years in the industry and 30+ years in franchising, we know
            what it takes to be a successful franchisor. Our depth of knowledge
            and commitment to helping our Franchisees succeed have helped us
            create training and support systems that are unparalleled in the
            industry. We provide extensive training with hands-on field
            operational support that starts the moment you become a franchisee.
          </p>

          <div className="grid grid-two-column">
            {items.map((currElem) => {
              return (
                <>
                  <div key={currElem.id} className="box">
                    <div className="box-image">
                      <h2 className="common-heading">{currElem.heading}</h2>
                    </div>
                    <div className="yellow"></div>
                    <div className="box-info">
                      <ul className="grid grid-two-column">
                        <li>{currElem.listOne}</li>
                        <li>{currElem.listTwo}</li>
                        <li>{currElem.listThree}</li>
                        <li>{currElem.listFour}</li>
                        <li>{currElem.listFive}</li>
                        <li>{currElem.listSix}</li>
                        <li>{currElem.listSeven}</li>
                        <li>{currElem.listEight}</li>
                      </ul>
                    </div>
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

export default SupportSection;
