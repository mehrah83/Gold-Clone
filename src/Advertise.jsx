import { useEffect } from "react";
import BannerSection from "./components/BannerSection"
import InstituteSection from "./components/InstituteSection";
import SubsribeSection from "./components/SubsribeSection";
import TrainerSection from "./components/TrainerSection";

const Advertise = () => {

  const data= {
    heading: "Advertise With Us - At Gold's Gym Clubs",
    backgroundImage: "https://goldsgym.in/uploads/slider/compress-banner-16.jpg",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    backgroundColor: "rgba(0, 0, 0, 0.34)",
  }

  useEffect(() => {
    document.title = "Advertisement | Advertises with Gold's Gym";

    return () => {
      document.title = "Gold's Gym India - Fitness Centre";
    }
  }, [])
  return (
    <>
     <BannerSection {...data}/> 
     <TrainerSection/>
     <InstituteSection/>
     <SubsribeSection/>
    </>
  )
}

export default Advertise;
