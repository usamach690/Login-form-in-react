import React from "react";
import CarPng from "../../assets/car.png";

const Hero = () => {
  return (
    <main>
      <div className="container">
        {/* Navbar Components here */}

        {/* Hero Section Here */}

        <section className="grid grid-cols-1 md:grid-cols-2 
        place-items-center min-h-[800px]">
          {/* text content section */}
          <div>

          <h1>
            HONDA <br /> SPORTS EV
          </h1>

          </div>
          <button>Explore</button>

          {/* image section */}
          <div>
            <img src={CarPng} alt="" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
