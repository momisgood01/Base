import './Testimonial.css';
import testimonialsData from "../Component/TestimonialData"
import { FaQuoteLeft } from 'react-icons/fa';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import React, { useState } from 'react';




function Testimonial() {
  const [testimonialsCarousel, setTestimonialsCarousel] = useState(0);

  const prevTestimonial = () => {
    setTestimonialsCarousel((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  

  const nextTestimonial = () => {
    setTestimonialsCarousel((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const { image, text, name, company } = testimonialsData[testimonialsCarousel];

  return (
    <section className='container mb-5 mr-5 '>
      <div className='text-center'>
        <h1>Client’s Testimonials</h1>
        <p className='testimonial  m-auto mb-5'>
          It is a long established fact that a reader will be distracted,
          by the readable content of a page when looking at its layout. The point of using.
        </p>
      </div>

      <div className='container d-flex  gap-5 testimonial-text'>
        <img className='img-fluid object-fit' src={image} alt={`Testimonial ${testimonialsCarousel + 1}`} />
        <div className=' '>
          
          <h1><FaQuoteLeft /></h1>
          <p className='lead'>{text}</p>
          <h5 className='mt-5'>{name}</h5>
          <p>{company}</p>
        </div>
      </div>

      {/* Carousel buttons below */}
      <div className='d-flex justify-content-center gap-3 mt-4'>
        <button className='btn btn-light btn-sm' onClick={prevTestimonial}><FaArrowRight/></button>
        <button className="btn btn-light btn-sm" onClick={nextTestimonial}><FaArrowLeft/></button>
      </div>

      {/* Bill */}

     

     
    </section>
  );
}

export default Testimonial;
