import BannerSection from "./components/BannerSection";
import FilterSection from "./components/FilterSection";
import SubsribeSection from "./components/SubsribeSection";

const Gallery = () => {
  const data = {
    heading: "GALLERY",
    backgroundImage: "https://goldsgym.in/assets/images/banner.jpg",
    backgroundSize: "unset",
  }
  return (
    <>
      <BannerSection  {...data}/>
      <FilterSection />
      <SubsribeSection />
    </>
  );
};

export default Gallery;
