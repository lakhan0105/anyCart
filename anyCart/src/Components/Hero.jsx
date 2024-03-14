import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero">
        <h2 className="hero-title">
          Discover Your Perfect Purchase. <br /> Shop with Us Today!
        </h2>

        {/* <p className="hero-info">
          From cozy sofas to elegant dining sets, and from stylish decor accents
          to essential kitchen gadgets, we have everything you need to transform
          your house into a home. Shop now and create your ultimate sanctuary
          with us!
        </p> */}

        <Link to="/products">
          <button className="btn hero-btn">our products</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
