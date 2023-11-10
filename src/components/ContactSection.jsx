import styled from "styled-components";
import { Button } from "../styles/Button";
import { useState } from "react";
import { ItemThree } from "../Items/FormItems";

const Wrapper = styled.section`
  .flex {
    align-items: flex-start;
    justify-content: space-between;
    select,
    input {
      border: 0.1rem solid #c5bdbd;
      padding: 1rem;
      width: 30vw;
      margin-top: 2rem;
      display: block;
    }

    .btn {
      width: 50%;
      margin: 2rem auto;
      display: block;
    }

    p {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: 700;
      max-width: 65rem;
      margin: 2rem auto;
      line-height: 1.5;
    }
  }

  @media (max-width: ${({theme}) => theme.media.tab}){
    .flex{
      flex-direction: column-reverse;
      align-items: center;

        p{
          text-align: center;
        }
       select,input{
        width: 60vw;
       }
    }
  }

  @media (max-width: 600px){
     iframe{
      width: 100%;
      margin: 0rem auto;
      display: block;
     }
     select,input{
      width: 100%;
     }
  }
`;

const ContactSection = () => {
  const data = {
    selectOption: "",
    name: "",
    email: "",
    contact: "",
    subject: "",
    location: "",
  }

  const [items, setItems] = useState(ItemThree);
  const [inputData, setInputData] = useState(data);

  const handleOnChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name] : e.target.value,
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("contactData")) || [];
    const updatedData = [...storedData, inputData];
    localStorage.setItem("contactData", JSON.stringify(updatedData));
    setInputData(data);
    alert("Form Submitted Successfully");
  }
  return (
    <>
      <Wrapper className="section">
        <div className="container flex">
          <form onSubmit={handleOnSubmit}>
            <div>
              <select name="contact_us" id="contact_us" required="" onChange={handleOnChange} value={inputData.selectOption}>
                {items.map((currElem) => {
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
                placeholder="Enter Name"
                onChange={handleOnChange}
                value={indexedDB.name}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                onChange={handleOnChange}
                value={inputData.email}
              />
            </div>
            <div>
              <input
                type="number"
                name="contact"
                id="contact"
                placeholder="Enter Contact Number"
                onChange={handleOnChange}
                value={inputData.contact}
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter Subject"
                onChange={handleOnChange}
                value={inputData.subject}
              />
            </div>
            <div>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Enter Location"
                onChange={handleOnChange}
                value={inputData.location}
              />
            </div>
            <Button className="btn" type="submit">
              SUBMIT
            </Button>
          </form>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9143606722496!2d72.87875557406214!3d19.11141255086214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf7b6e1c9f87%3A0x70ea50fcd535cf58!2sGold&#39;s%20Gym%20Head%20Office%20and%20Gold&#39;s%20Gym%20Fitness%20Institute%20-%20Andheri%20East!5e0!3m2!1sen!2sin!4v1699146421648!5m2!1sen!2sin"
              width="600"
              height="250"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p>
              Address:- Dhantak Plaza, 203, 2nd Floor, Makwana Rd, Gamdevi,
              Marol, Andheri East, Mumbai, Maharashtra 400059
            </p>
            <p>Email: WeCare@GoldsGym.in</p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ContactSection;
