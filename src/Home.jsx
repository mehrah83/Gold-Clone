import ComingSoonSection from "./components/ComingSoonSection";
import DownloadSection from "./components/DownloadSection";
import EventSection from "./components/EventSection";
import FitnessInstitute from "./components/FitnessInstitute";
import FormSection from "./components/FormSection";
import IconSection from "./components/IconSection";
import OfferSection from "./components/OfferSection";
import PreSaleSection from "./components/PreSaleSection";
import Slider from "./components/Slider";
import TrainingSection from "./components/TrainingSection";

const Home = () => {
  const data = {
    heading: "Download the Gold's Gym India App today",
    para: "Get access to workout videos by international fitness trainers",
    btnContent: "Download Now",
    backgroundImage: "https://goldsgym.in/assets/frontend/css/workbaner.jpg",
}
  return (
    <>
     <Slider/>
     <IconSection/>
     <DownloadSection {...data}/>
     <TrainingSection/>
     <OfferSection/>
     <PreSaleSection/>
     <ComingSoonSection/>
     <FitnessInstitute/>
     <EventSection/>
     <FormSection/>
    </>
  )
}

export default Home
