import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Home from "./Home";
import Gallery from "./Gallery";
import Franchise from "./Franchise";
import Contact from "./Contact";
import Advertise from "./Advertise";
import { GlobalStyle } from "./GlobalStyle";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useState } from "react";
import { useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 9999;
`;

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timeout);
  }, []);



  const theme = {
    colors: {
      primary: "#ffe400",
      white: "#fff",
      black: "#000",
      secondary: "#666",
      anotherBlack: "#323232",
      para: "#7d7d7d",
      purple: "#0c1732",
    },
    media: {
      mobile: "768px",
      tab: "998px",
      largeDevice: "1326px",
      mediumDevice: "1100px",
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {loading ? (
          <LoaderContainer>
            <HashLoader color={"#ffe400"} loading={loading} size={50} />
          </LoaderContainer>
        ) : (
          <Router>
            <TopHeader />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/franchise" element={<Franchise />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/advertise" element={<Advertise />} />
            </Routes>
            <ScrollToTop />
            <Footer />
          </Router>
        )}
      </>
    </ThemeProvider>
  );
};

export default App;
