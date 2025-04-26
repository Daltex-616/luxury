import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FleetGallery from "../components/FleetGallery";
import SocialSidebar from "../components/SocialSidebar";
import Nosotros from "./Nosotros";
import Servicios from "./Servicios";
import Footer from "./Footer";
import Contacto from "./Contacto";
import SliderTestimonios from "./SliderTestimonios";
import Price from "./Price";
import ServiciosCuadro from "./ServiciosCuadro";
import NosotrosCuadors from "./NosotrosCuadors";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SocialSidebar />
      <Hero preloadImage={true} />
      <ServiciosCuadro />
      <Servicios />
      <FleetGallery />
      <Nosotros />
      <NosotrosCuadors />
      <Price />
      <SliderTestimonios />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Index;