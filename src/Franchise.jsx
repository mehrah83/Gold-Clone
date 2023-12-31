import BannerSection from "./components/BannerSection";
import BrandSection from "./components/BrandSection";
import MillionSection from "./components/MillionSection";
import MovementSection from "./components/MovementSection";
import ScrollToFranchise from "./components/ScrollToFranchise";
import SupportSection from "./components/SupportSection";
import VideoSection from "./components/VideoSection";
import { useEffect } from "react";

const Franchise = () => {

  const data = {
    heading: "Become A Golds Gym Franchise Today",
    backgroundImage: "https://goldsgym.in/uploads/slider/compress-Untitled-1.jpg",
    backgroundSize: "cover",
  }

  useEffect(() => {
    document.title = "Gold's Gym Franchise | Franchise opportunities";

    return () => {
      document.title = "Gold's Gym India - Fitness Centre";
    }
  }, [])
  return (
    <>
      <BannerSection {...data}/>
      <MovementSection/>
      <BrandSection/>
      <MillionSection/>
      <SupportSection/>
      <VideoSection/>
      <ScrollToFranchise/>
    </>
  )
}

export default Franchise;
