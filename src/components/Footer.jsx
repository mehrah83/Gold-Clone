import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ItemOne, ItemTwo } from "../Items/FooterItem";


const Wrapper = styled.footer`
padding-top: 10rem;
background: ${({ theme }) => theme.colors.black};

.quick-links {
  h4 {
    color: ${({ theme }) => theme.colors.primary};
  }
  .link-group {
    display: flex;
    align-items: center;
    gap: 2rem;

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
      .link {
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.5rem;
      }
    }
  }
}
.news-letter {
  h4 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
    max-width: 30rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  .input-div {
    border: 0.2rem solid ${({ theme }) => theme.colors.white};
    padding: 1.5rem;
    width: 68%;
    position: relative;
    input {
      background-color: transparent;
      outline: none;
      border: none;
      color: ${({ theme }) => theme.colors.white};
    }
    button {
      position: absolute;
      right: 0;
      top: 0;
      background: ${({ theme }) => theme.colors.white};
      outline: none;
      height: 4.6rem;
      width: 3rem;
      border: none;
    }
  }
  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;

    i {
      color: ${({ theme }) => theme.colors.white};
      font-size: 2rem;
    }
  }
}
.news {
  h4 {
    color: ${({ theme }) => theme.colors.primary};
  }
  div {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.white};

    .news-link {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.5rem;
      margin-bottom: 2rem;
      margin-top: 1rem;
      line-height: 1.5;
    }
  }
}

.sub-footer {
  background: rgb(60 58 58 / 50%);
  padding: 1rem;
  margin-top: 2rem;
  .grid-three-column {
    align-items: center;
    .rights,
    .terms {
      p {
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
    .terms {
      align-self: end;
      text-align: end;
    }
    .flex {
      align-items: center;
      gap: 2rem;
    }
  }
}

@media (max-width: 900px) {
  .grid-three-column{
    grid-template-columns: repeat(2,1fr);
  }
}

@media (max-width: ${({theme}) => theme.media.mobile}) {
  .sub-footer .grid-three-column {
    grid-template-columns: repeat(1,1fr);
    gap: 2rem;
    .flex{
      justify-content: center;
    }
    .rights,.terms{
      text-align: center;
    }
}
}

@media (max-width: 500px) {
.grid-three-column{
  grid-template-columns: repeat(1,1fr);
  .link-group{
    justify-content: space-between;
  }
  .news-letter{
    text-align: center;
    p{
      max-width: 100%;
    }
    .input-div{
      width: 100%;
    }
    .social-icons{
      justify-content: center;
    }
  }
  .news{
    text-align: center;
  }
}
.sub-footer{
  .flex{
    flex-direction: column;
  }
}
}
`;
const Footer = () => {
  const myDate = new Date();
  return (
    <>
      <Wrapper>
        <div className="container grid grid-three-column">
          <div className="quick-links">
            <h4>QUICK LINKS</h4>
            <div className="link-group">
              <ul>
                {ItemOne.map((currElem) => {
                  return (
                    <>
                      <li key={currElem.id}>
                        <NavLink className="link">{currElem.text}</NavLink>
                      </li>
                    </>
                  );
                })}
              </ul>
              <ul>
                {ItemTwo.map((currElem) => {
                  return (
                    <>
                      <li key={currElem.id}>
                        <NavLink className="link">{currElem.text}</NavLink>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="news-letter">
            <h4>NEWS LETTER</h4>
            <p>sign up for our mailing list to get latest updates and offers</p>
            <div className="input-div">
              <input type="email" placeholder="E-mail" />
              <button type="submit">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <div className="social-icons">
              <li>
                <NavLink>
                  <i className="fa-brands fa-facebook"></i>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <i className="fa-brands fa-square-x-twitter"></i>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <i className="fa-brands fa-youtube"></i>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <i className="fa-brands fa-square-instagram"></i>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <i className="fa-brands fa-linkedin"></i>
                </NavLink>
              </li>
            </div>
          </div>
          <div className="news">
            <h4>LATEST NEWS</h4>
            <div>
              <NavLink className="news-link">
                7 simple ways to boost your metabolism
              </NavLink>
            </div>
            <div>
              <NavLink className="news-link">
                Reverse Running, Pilates, And More: Trends That Will Keep You
                Fit In 2022
              </NavLink>
            </div>
            <div>
              <NavLink className="news-link">
                5 most common myths about carbs busted by experts
              </NavLink>
            </div>
          </div>
        </div>
        <div className="sub-footer">
          <div className="container grid grid-three-column">
            <div className="rights">
              <p>@ {myDate.getFullYear()} Gold Gym.in. All Rights Reserved.</p>
            </div>
            <div className="flex">
              <NavLink>
                <img
                  src="https://goldsgym.in/assets/google-play-store.png"
                  alt=""
                />
              </NavLink>
              <NavLink>
                <img
                  src="https://goldsgym.in/assets/apple-app-store.png"
                  alt=""
                />
              </NavLink>
            </div>
            <div className="terms">
              <p>Terms & Conditions | Privacy Policy</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;
