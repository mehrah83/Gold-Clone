import styled from "styled-components";


const Wrapper = styled.section`
background: ${({ theme }) => theme.colors.primary};
padding: 2rem;

.flex{
  align-items: center;
  justify-content: space-between;
}

p,
a {
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  font-size: 1.3rem;
}
.institute {
  width: 60rem;
  text-align: center;
  p {
    line-height: 1.5;
  }
}

@media (max-width: ${({theme}) => theme.media.tab}) {
  .flex{
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
}
`;
const TopHeader = () => {
  return (
    <>
      <Wrapper>
        <div className="container flex">
          <div className="phone">
            <p>
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              &nbsp; &nbsp; +91 8976834832
            </p>
          </div>
          <div className="institute">
            <p>
              Gold Gym Fitness Institute: Central IVR Number{" "}
              <a href="#">+91 8067039831</a> | Mumbai <a href="#">9029002873</a>{" "}
              | Pune <a href="#">9029002870</a> | Delhi{" "}
              <a href="#">9560044981</a> | Bengaluru <a href="#">9987536492</a>
            </p>
          </div>
          <div className="email">
            <p>
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              &nbsp; &nbsp; Wecare@goldsgym.in
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default TopHeader;
