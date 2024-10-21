import React from 'react';

function CartItem({ item, onUpdateCart, onRemoveFromCart }) {
  return (
    <div className="cart-item">
      <h3>
        {' '}
        {item.title}
        {' '}
      </h3>
      <p>
        {' '}
        $
        {item.price}
      </p>
      <div>
        <input type="text" value={item.quantity} onChange={(e) => onUpdateCart(item, e.target.value)} />
        <button onClick={(e) => onRemoveFromCart(item)}>Remover</button>
      </div>
    </div>
  );
}

export default CartItem;
