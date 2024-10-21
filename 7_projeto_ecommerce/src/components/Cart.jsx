import React from 'react';
import CartItem from './CartItem';
import CheckoutButton from './CheckoutButton';

function Cart({
  cartItems, onUpdateCart, onRemoveFromCart, onCheckout, setCartItems,
}) {
  console.log(cartItems);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <p>Nao tem items no carrinho !</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateCart={onUpdateCart}
              onRemoveFromCart={onRemoveFromCart}
            />
            // ATENçÃO!!!!
            // na api.json que estou a utilizar NÃO tenho "name" mas sim "title".
          ))}
          <div className="total">
            <p>
              Total: $
              {totalPrice.toFixed(2)}
            </p>
            <CheckoutButton cartItems={cartItems} setCartItems={setCartItems} />

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;
