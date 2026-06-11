import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import MenuSection from "../components/sections/MenuSection";
import GallerySection from "../components/sections/GallerySection";
import EventsSection from "../components/sections/EventsSection";
import ReviewsSection from "../components/sections/ReviewsSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <div className="single-page">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <EventsSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  );
}
