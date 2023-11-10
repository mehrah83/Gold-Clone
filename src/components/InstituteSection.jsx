import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { InstituteItems } from "../Items/InstituteItems";

const Wrapper = styled.section`
  background-image: url("https://goldsgym.in/assets/frontend/css/workbaner.jpg");
  height: 100vh;
  background-size: cover;
  position: relative;
  background-attachment: fixed;

  &::before {
    background-color: rgba(0, 57, 97, 0.76);
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .flex {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    z-index: 9999;
    position: relative;

    .common-heading {
      span {
        color: ${({ theme }) => theme.colors.white};
      }
    }
    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.8rem;
      font-weight: 900;
    }
  }

  .images-group {
    z-index: 9999;
    position: relative;
    margin-top: 2rem;
  }

  @media (max-width: ${({theme}) => theme.media.largeDevice}) {
      height: auto;

      .images-group{
        img{
          width: 100%;
          height: 100%;
        }
      }
  }

  @media (max-width: 500px) {
    .container{
      padding: 0rem 3rem;
      .common-heading,p{
        text-align: center;
      }
    }
  }
`;

const InstituteSection = () => {
  const [items, setItems] = useState(InstituteItems);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <>
      <Wrapper className="section">
        <div className="container flex">
          <div>
            <picture>
              <img src="https://goldsgym.in/assets/images/line.png" alt="" />
            </picture>
          </div>
          <div>
            <h2 className="common-heading">
              Gold Gym <span>Fitness Institute</span>
            </h2>
          </div>
          <div>
            <p>Physical Activity Or Can Improve Your Health</p>
          </div>
        </div>
        <div className="container images-group">
          <Slider {...settings}>
            {items.map((currElem) => {
              return (
                <>
                  <picture key={currElem.id}>
                    <img src={currElem.img} alt="" />
                  </picture>
                </>
              );
            })}
          </Slider>
        </div>
      </Wrapper>
    </>
  );
};

export default InstituteSection;
