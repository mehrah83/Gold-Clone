import DownloadSection from "./DownloadSection"

const OfferSection = () => {

    const data = {
        mainHeading: "Special Offer",
        heading: "Buy a Gold's Gym membership today",
        para: "Start your fitness journey today",
        btnContent: "Sign Me Up",
        backgroundImage: "https://goldsgym.in/assets/frontend/css/off.jpg",
    }
  return (
    <>
    <DownloadSection {...data}/> 
    </>
  )
}

export default OfferSection;
