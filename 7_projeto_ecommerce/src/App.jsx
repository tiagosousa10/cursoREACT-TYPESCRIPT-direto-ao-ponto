import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Catalog from './components/Catalog';
import Cart from './components/Cart';
import ThankYouPage from './components/ThankYouPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  //                          Adicionar ao Carrinho - ADD
  const handleAddCart = (product, quantity) => {
    setCartItems((prevItems) => {
      // senao existir => adiciono item
      // se existir => incremento a quantidade

      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        toast.info(`Quantidade do item ${product.title} atualizada. `);

        return prevItems.map((item) => (item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item));
      }
      toast.success(`${product.title} adicionado com sucesso!`);
      return [...prevItems, { ...product, quantity }];
    });
  };

  //                          Atualizar Carrinho (Cart) - UPDATE
  const handleUpdateCart = (product, quantity) => {
    toast.info(`Quantidade do item ${product.title} atualizada. `);
    setCartItems((prevItems) => prevItems.map((item) => (item.id === product.id
      ? { ...item, quantity: +quantity }
      : item)));
  };

  //                            Remover do Carrinho - DELETE
  const handleRemoveFromCart = (product) => {
    toast.error(`${product.title} foi removido com sucesso`);
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
  };

  //                                        return
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Catálogo</Link>
        <Link to="/cart">Carrinho</Link>

      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Catalog onAddToCart={handleAddCart} />} />
          <Route
            path="/cart"
            element={(
              <Cart
                cartItems={cartItems}
                onUpdateCart={handleUpdateCart}
                onRemoveFromCart={handleRemoveFromCart}
                setCartItems={setCartItems}
                onCheckout={() => {
                  if (cartItems.length > 0) {
                    toast.success('Compra finalizada com SUCESSO!');
                    setCartItems([]);
                  } else {
                    toast.error('O carrinho esta vazio');
                  }
                }}
              />
)}
          />
          <Route path="/thank-you" element={<ThankYouPage />} />

        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
