import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function CheckoutButton({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      toast.success('Compra finalizada com SUCESSO!');
      navigate('/thank-you', { state: { cartItems } });

      setCartItems([]);
    } else {
      toast.error('O carrinho esta vazio');
    }
  };
  return (
    <button onClick={handleCheckout}>Finalizar Compra</button>
  );
}

export default CheckoutButton;
