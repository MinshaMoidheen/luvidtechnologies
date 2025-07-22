import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    text: '"What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client."',
    name: 'Mohima Ale',
    title: 'App Developer, India',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    text: '"What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client."',
    name: 'Dr Aneesh',
    title: 'Founder Cutopia India',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    text: '"What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client."',
    name: 'Ana Alsharari',
    title: 'CEO and Co-Owner at Perle',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

const MOBILE_BREAKPOINT = 600;

const TestimonialsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="testimonials-root">
      <div className="testimonials-badge">Testimonials</div>
      <h2 className="testimonials-title">What they say<br />about us</h2>
      {isMobile ? (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          speed={900}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="testimonial-card">
                <div className="testimonial-text">{t.text}</div>
                <div className="testimonial-user-row">
                  <img src={t.img} alt={t.name} className="testimonial-avatar" />
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial1-title">{t.title}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="testimonials-cards">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-text">{t.text}</div>
              <div className="testimonial-user-row">
                <img src={t.img} alt={t.name} className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial1-title">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <button className="testimonials-btn">View all Testimonials <span className="testimonials-arrow">→</span></button>
    </section>
  );
};

export default TestimonialsSection; 