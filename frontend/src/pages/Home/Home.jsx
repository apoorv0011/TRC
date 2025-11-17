import React, { useRef, useEffect } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import BestSellers from "../../components/BestSellers/BestSellers";

const Home = ({ section }) => {
  const categoriesRef = useRef(null);
  const bestRef = useRef(null);
  const newRef = useRef(null);

  // Scroll handling
  useEffect(() => {
    if (section === "categories") categoriesRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "best") bestRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "new") newRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [section]);

  return (
    <div>
      {/* Hero Section */}
      <Header />

      {/* Categories */}
      <div ref={categoriesRef}>
        <ExploreMenu />
      </div>

      {/* New Arrivals */}
      <div ref={newRef}>
        <ProductDisplay />
      </div>

      {/* Best Sellers */}
      <div ref={bestRef}>
        <BestSellers />
      </div>

      
    </div>
  );
};

export default Home;
