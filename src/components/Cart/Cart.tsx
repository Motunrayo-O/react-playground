import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState({
    discount: 10,
    items: [
      { id: 1, title: "Prod1", quantity: 1 },
      { id: 2, title: "Prod2", quantity: 2 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((i) =>
        i.id === 1 ? { ...i, quantity: i.quantity + 1 } : i
      ),
    });
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.items.map((it) => (
          <p key={it.id}>
            name: {it.title}, quantity: {it.quantity}
          </p>
        ))}
      </ul>

      <button onClick={handleClick}>Increment Prod1</button>
    </div>
  );
};

export default Cart;
