import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Hero() {
  const { user } = useSelector((state) => state.userState);

  return (
    <section className="hero-section">
      <div className="hero">
        <h2 className="hero-title">
          Discover Your Perfect Purchase. <br /> Shop with Us Today!
        </h2>

        <Link to="/products">
          <button className="btn hero-btn">our products</button>
        </Link>

        <h4 className="hero-name">
          <span>
            {user
              ? `${user.username}, use #NEWBIE for discounts`
              : "Login to get 10% Off"}
          </span>
        </h4>

        <p className="hero-info">
          From cozy sofas to elegant dining sets, and from stylish decor accents
          to essential kitchen gadgets, we have everything you need to transform
          your house into a home. Shop now and create your ultimate sanctuary
          with us!
        </p>
      </div>
    </section>
  );
}

export default Hero;
