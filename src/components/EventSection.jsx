import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



const Wrapper = styled.section`
.common-heading {
  text-align: center;
  margin-bottom: 2rem;
  span {
    color: ${({ theme }) => theme.colors.black};
  }
}
.box {
  border: 0.1rem solid ${({ theme }) => theme.colors.white};
  max-width: 95%;
  outline: none;
  cursor: pointer;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  transition: all 0.5s ease-in;
  filter: drop-shadow(0 0 6.5px rgba(0, 0, 0, 0.11));

  &:hover,
  &:active {
    transform: translateY(-1rem);
  }

  img {
    max-width: 100%;
  }

  h4 {
    font-size: 1.7rem;
    margin-top: 1rem;
  }
  p {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
}

.slick-dots li button:before {
font-size: 1.2rem !important;
}
`;
const EventSection = () => {
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    try {
      let response = await axios.get(
        "https://mocki.io/v1/674d8da8-b39a-4ef1-8355-f33f94ea0990"
      );
      // console.log(response.data);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: false,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <>
      <Wrapper className="section">
        <div className="container">
          <h2 className="common-heading">
            <span>LATEST</span> EVENT
          </h2>
          <Slider {...settings}>
            {userData.map((currElem) => {
              return (
                <>
                  <div className="box" key={currElem.id}>
                    <img src={currElem.src} alt={currElem.alt} />
                    <h4>{currElem.info}</h4>
                    <p>{currElem.para}</p>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </Wrapper>
    </>
  );
};

export default EventSection;
