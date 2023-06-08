import { useState } from "react";

const ItemCount = ({ stock, handleOnAdd }) => {
  const [count, setCount] = useState(1);

  const handleClick = (action) => {
    if (action && count < stock) {
      setCount((prev) => prev + 1);
    } else if (!action && count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="item-count-container">
      <button onClick={() => handleClick(false)}>-</button>
      <p>{count}</p>
      <button onClick={() => handleClick(true)}>+</button>
      <br />
      <button onClick={() => handleOnAdd(count)}>Add to cart</button>
    </div>
  );
};

export default ItemCount;
