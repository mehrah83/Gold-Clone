import styled from "styled-components";

const Wrapper = styled.section`
  .flex {
    align-items: center;

    .common-heading {
      color: ${({ theme }) => theme.colors.black};
    }
    p {
      color: #dfc801;
      font-size: 1.4rem;
      margin-top: 0.5rem;
    }
    .info {
      background-color: #f7f7f7;
      padding: 1.5rem 2rem;
      margin-top: 3rem;
      .grid-two-column {
        gap: 1.5rem;
        li {
          font-size: 1.3rem;
          position: relative;
          font-weight: 900;
          &::before {
            content: "ï†’";
            font-family: fontawesome;
            position: relative;
            left: -0.5rem;
            color: rgb(223, 200, 1);
          }
        }
      }
    }
  }

  @media (max-width: ${({theme}) => theme.media.largeDevice}) {
    .flex{
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      .trainerInfo{
        .common-heading{
          text-align: center;
        }
        p{
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 500px){
    .trainerImage{
      img{
        width: 100%;
        height: auto;
      }
    }

      .grid-two-column{
        grid-template-columns: repeat(1,1fr);
        text-align: center;
      }
  }
`;

const TrainerSection = () => {
  return (
    <>
      <Wrapper className="section">
        <div className="container flex">
          <div className="trainerImage">
            <picture>
              <img src="https://goldsgym.in/assets/images/body-2.jpg" alt="" />
            </picture>
          </div>
          <div className="trainerInfo">
            <h2 className="common-heading">WHERE TO ADVERTISE?</h2>
            <p>MEDIUMS (ON OUR WEBSITE / AT A GYM /LIVE)</p>
            <div className="info">
              <ul className="grid grid-two-column">
                <li>DISPLAYS</li>
                <li>WEBSITE BRANDING E-MAILERS</li>
                <li>INTERACTIVE MEDIA</li>
                <li>CONTEST</li>
                <li>ELECTRONIC MEDIA</li>
                <li>EVENT SPONSORSHIP</li>
                <li>SAMPLING</li>
                <li>OOH</li>
                <li>STATIC BRANDING</li>
                <li>BACK LIT UP SCROLLERS</li>
                <li>(STANDEE/POSTERS/MIRROR STICKERS)</li>
                <li>PILLAR/WALL BRANDING</li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default TrainerSection;
