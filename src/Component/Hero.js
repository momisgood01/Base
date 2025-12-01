import React from "react";
import "../Component/Hero.css"; // ✅ import CSS correctly (no variable name needed)
import heroImage from "../Component/assets/hero.png";

function Hero() {
  return (
    <section className=" d-flex m justify-content-between  ">
       <div data-aos="fade-up" className="hero-text">
          <h1 className="mb-5 fw-bold">
            We specialize in UI/UX, Web Development, Digital Marketing.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus
            consequat varius nisi quis, posuere magna.
          </p>

          <div className="d-flex gap-5 mt-2 pt-2 button-box">
          <button className="btn-rounded">
            Get Started Now
          </button>
          <p className="m-0">
            Call us (0123) 456 – 789 <br />
            For any question or concern
          </p>
        </div>
        </div>

        {/* hero woman image */}
      <div>
        <div className="hero-woman d-none d-md-block">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
      </div>
    
    </section>
  );
}

export default Hero;
