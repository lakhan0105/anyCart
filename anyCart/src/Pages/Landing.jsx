import React from "react";
import Hero from "../Components/Hero";
import { FeaturedProducts } from "../Components/index";
import custFetch from "../utilities/custFetch";
import { useNavigation } from "react-router-dom";

// loader for featured products
export const loader = async () => {
  const resp = await custFetch.get("/products?featured=true");
  return { products: resp.data.data };
};

function Landing() {
  // setup loading when state==="loading"
  const nav = useNavigation();
  if (nav.state === "loading") {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="landing-section">
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
    </section>
  );
}

export default Landing;
