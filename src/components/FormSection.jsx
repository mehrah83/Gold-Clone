import styled from "styled-components";
import { Button } from "../styles/Button";
import { useState } from "react";
import { ItemOne, ItemTwo } from "../Items/FormItems";

const Wrapper = styled.section`
  .common-heading {
    text-align: center;

    span {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  select,
  input {
    border: 0.1rem solid #c5bdbd;
    padding: 1rem;
    margin: 1rem;
    width: 50%;
    margin: 2rem auto;
    display: block;
  }

  .btn {
    width: 20%;
    margin: 0rem auto;
    display: block;
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    select,input{
      width: 100%;
    }
  }
  @media (max-width: 400px) {
    .btn{
      width: 100%;
    }
  }
`;

const FormSection = () => {
  const data = {
    selectOptionOne: "",
    name: "",
    email: "",
    phone: "",
    selectOptionState: "",
  };

  const [inputData, setInputData] = useState(data);

  const handleOnChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    const updatedData = [...storedData, inputData];
    localStorage.setItem("formData", JSON.stringify(updatedData));
    setInputData(data);
    alert("Data Submitted Successfully");
  };
  return (
    <>
      <Wrapper className="section">
        <div className="container">
          <h2 className="common-heading">
            <span>GET IN TOUCH</span> WITH US
          </h2>

          <form onSubmit={submitHandler}>
            <div>
              <select
                id="selectOptionOne"
                name="selectOptionOne"
                onChange={handleOnChange}
                value={inputData.selectOptionOne}
              >
                {ItemOne.map((currElem) => {
                  return (
                    <>
                      <option key={currElem.id} value={currElem.value}>
                        {currElem.text}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                value={inputData.name}
                onChange={handleOnChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={inputData.email}
                placeholder="Enter email"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <input
                type="number"
                name="phone"
                id="phone"
                value={inputData.phone}
                placeholder="Enter phone"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <select
                name="selectOptionState"
                id="selectOptionState"
                value={inputData.selectOptionState}
                onChange={handleOnChange}
              >
                {ItemTwo.map((currElem) => {
                  return (
                    <>
                      <option key={currElem.id} value={currElem.value}>
                        {currElem.text}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
            <Button className="btn">Join Now</Button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default FormSection;
