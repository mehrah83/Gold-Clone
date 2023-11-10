import BannerSection from "./components/BannerSection";
import ContactSection from "./components/ContactSection";

const Contact = () => {
  const data= {
    heading: "CONTACT GOLD'S GYM",
    para: "WE'D LOVE TO HEAR FROM YOU",
    backgroundImage: "https://goldsgym.in/assets/images/contact.jpg",
    backgroundSize: "cover",
  }
  return (
    <>
     <BannerSection {...data}/>
     <ContactSection/>
    </>
  )
}

export default Contact;
