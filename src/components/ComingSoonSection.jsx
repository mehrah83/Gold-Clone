import styled from "styled-components";


const Wrapper = styled.section`
background: ${({ theme }) => theme.colors.black};

.flex {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  .common-heading {
    span {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }
}
.grid-two-column {
  align-items: center;
  margin-top: 3rem;
  p {
    color: ${({ theme }) => theme.colors.primary};
    max-width: 35rem;
    line-height: 2;
    font-weight: 600;

    strong {
      color: ${({ theme }) => theme.colors.white};
    }
  }
}

@media (max-width: ${({theme}) => theme.media.mobile}) {
  .grid-two-column{
    grid-template-columns: repeat(1,1fr);

    p{
      max-width: 100%;
      text-align: center;
    }

    img{
      max-width: 100%;
    display: block;
    margin: 0rem auto;
    }
  }
}

@media (max-width: 400px) {
  .common-heading{
    text-align: center;
  }
}
`;
const ComingSoonSection = () => {
  return (
    <>
      <Wrapper className="section">
        <div className="container flex">
          <picture>
            <img
              src="https://goldsgym.in/assets/frontend/images/line.png"
              alt=""
            />
          </picture>
          <h2 className="common-heading">
            GYMS COMING <span>Soon</span>
          </h2>
        </div>
        <div className="container grid grid-two-column">
          <p>
            <strong>GYMS COMING SOON :</strong> KHARADI – PUNE - MAHARASHTRA|
            CHAKAN - PUNE - MAHARASHTRA| DIPHU - ASSAM | GURUGRAM - SECTOR 67 |
            BREACH CANDY - MUMBAI - MAHARASHTRA
          </p>
          <picture>
            <img
              src="https://goldsgym.in/uploads/blog/compress-g2.jpg"
              alt=""
            />
          </picture>
        </div>
      </Wrapper>
    </>
  );
};

export default ComingSoonSection;
