import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoginPage from "./Pages/LoginPage";
import BookingPage from "./components/BookingPage"; // ✅ correct
import TajAbout from "./components/TajAbout";
import TajHighlights from "./components/TajHighlights";
import TajOffers from "./components/TajOffers";
import HotelInfo from "./components/HotelInfo";
import Facilities from "./components/Facilities";
import LocationSection from "./components/LocationSection";
import FAQSection from "./components/FAQSection";
import TravelStories from "./components/TravelStories";
import TajFooter from "./components/TajFooter";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <TajAbout/>
      <TajHighlights/>
      <TajOffers/>
      <HotelInfo/>
      <Facilities/>
      <LocationSection/>
      <FAQSection/>
      <TravelStories/>
      <TajFooter/>

    </>
  );
}

export default App;