import React, { useContext } from "react";
import { StoreContext } from "../../context/ShowContext";
import ResinItem from "../../components/ResinItem/ResinItem";

const NewArrivals = () => {
  const { product_list } = useContext(StoreContext);

  // ALWAYS show newest 4
  const latest = product_list.slice(0, 4);

  return (
    <div className="product_display">
      <h1>New Arrivals</h1>
      <div className="product-display-list">
        {latest.map((item) => (
          <ResinItem
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
