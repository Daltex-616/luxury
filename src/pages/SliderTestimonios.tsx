import { Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "@/constants/testimonals.data";
import { useTranslation } from 'react-i18next';

const SliderTestimonios = () => {
  const {t} = useTranslation()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "15px",
          centerMode: true,
          dots: false // Ocultamos puntos en móvil para evitar superposición
        },
      },
    ],
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section id="testimonios" className="py-20 md:py-28 px-4 section-fade bg-testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="testimonials-wrapper relative">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 md:mb-16 animate-slide-up">
            {t("reviews.title")}
          </h2>
          <div className="slider-container pb-12"> {/* Contenedor con espacio para dots */}
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2 md:px-3" style={{ "--slide-index": index } as React.CSSProperties}>
                  <div className="glass-card p-5 md:p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#3A3F4D]/70 to-[#2A2E3A] flex items-center justify-center text-xs md:text-sm font-semibold text-[#E8D9A5] mr-3">
                        {getInitials(testimonial.author)}
                      </div>
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 hover:scale-110"
                              fill={i < testimonial.rating ? "#3A3F4D" : "none"}
                              color={i < testimonial.rating ? "#E8D9A5" : "#3A3F4D"}
                            />
                          ))}
                      </div>
                    </div>
                    <p className="mb-4 md:mb-5 text-text/80 text-sm md:text-base leading-relaxed">
                      {testimonial.text}
                    </p>
                    <div className="font-semibold text-base md:text-lg text-text">{testimonial.author}</div>
                    <div className="text-text/60 text-xs md:text-sm mt-1">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderTestimonios;