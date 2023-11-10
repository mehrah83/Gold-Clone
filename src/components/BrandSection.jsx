import styled from "styled-components";

const Wrapper = styled.section`
  background-image: url("https://goldsgym.in/assets/frontend/css/country.jpg");
  height: 90vh;
  background-size: cover;
  .brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3rem;
    .image-group {
      display: flex;
      align-items: center;
      gap: 10rem;

      h2 {
        color: ${({ theme }) => theme.colors.white};
        font-size: 2.2rem;
        margin-top: 1rem;
      }
    }
    .common-heading {
      span {
        color: ${({ theme }) => theme.colors.white};
      }
    }
    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.8rem;
    }
  }

  @media (max-width: 600px) {
    .brand{
      .image-group{
        gap: 5rem;
      }
    }
  }

  @media (max-width: 500px) {
    height: auto;
    .brand{
      .image-group{
        flex-direction: column;
      }
    }
  }
`;

const BrandSection = () => {
  return (
    <>
      <Wrapper className="section">
        <div className="container">
          <div className="brand">
            <div>
              <picture>
                <img
                  src="https://goldsgym.in/assets/frontend/images/line.png"
                  alt=""
                />
              </picture>
            </div>
            <div>
              <h2 className="common-heading">
                Strength Of The <span>Gold Gym Brand</span>
              </h2>
            </div>
            <div>
              <p>
                Gold Gym is the most recognized name in fitness & the largest
                co-ed gym chain in the world. We’ve got 50 years of history
                behind us and a very bright future ahead of us. No other gym
                concept can rival the global brand strength of Gold’s Gym.
              </p>
            </div>
            <div className="image-group">
              <div>
                <picture>
                  <img
                    src="https://goldsgym.in/assets/frontend/images/gold.png"
                    alt=""
                  />
                </picture>
                <h2>720+</h2>
                <p>Gyms</p>
              </div>
              <div>
                <picture>
                  <img
                    src="https://goldsgym.in/assets/frontend/images/world.png"
                    alt=""
                  />
                </picture>
                <h2>28</h2>
                <p>Countries</p>
              </div>
              <div>
                <picture>
                  <img
                    src="https://goldsgym.in/assets/frontend/images/india.png"
                    alt=""
                  />
                </picture>
                <h2>25</h2>
                <p>States</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default BrandSection;
