import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FleetGallery from "../components/FleetGallery";
import SocialSidebar from "../components/SocialSidebar";
import Nosotros from "./Nosotros";
import Servicios from "./Servicios";
import Footer from "./Footer";
import SliderTestimonios from "./SliderTestimonios";
import Price from "./Price";
import ServiciosCuadro from "./ServiciosCuadro";
import NosotrosCuadors from "./NosotrosCuadors";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#09090B]">
      <Navbar />
      <SocialSidebar />
      
      {/* SECCIÓN INICIO */}
      <section id="inicio">
        <Hero preloadImage={true} />
      </section>

      <ServiciosCuadro />
      <Servicios />
      <FleetGallery />
      <Nosotros />
      <NosotrosCuadors />

      {/* SECCIÓN PRECIOS */}
      <section id="precios">
        <Price />
      </section>

      <SliderTestimonios />
      <Footer />
    </div>
  );
};

export default Index;