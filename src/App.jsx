import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/slick.css";
import "./assets/css/responsive.css";
import "./assets/css/construction/jquery.localizationTool.css";
import "./App.css";

// import "./assets/css/style2.css";
import "./assets/css/swiper-bundle.min.css";

import "./assets/css/intlTelInput.css";
import "./assets/css/sScrollBar.css";
import "./assets/css/slick-theme.css";
// import "./assets/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Plans from "./Components/Plans/Plans";
import FaQ from "./Components/FaQ/Faq";
import TestimonialSection from "./Components/TestimonialSection/TestimonialSection";
import Sign from "./Components/Sign/Sign";
function App() {
  return (
    <Router>
      <Navbar />
      <HeroBanner />
      <Plans />
      <FaQ />
      <Sign />
      <TestimonialSection />
      <Footer />
    </Router>
  );
}

export default App;
