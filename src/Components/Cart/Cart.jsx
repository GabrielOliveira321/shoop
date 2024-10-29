import React, { useContext, useState, useEffect } from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../Context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {
    const { cartItems, isCartVisible } = useContext(AppContext);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleQuantityChange = (id, quantity, itemTotal) => {
      const updatedItems = cartItems.map((item) => 
        item.id === id ? { ...item, quantity } : item
      );
      recalculateTotal(updatedItems);
    };

    const recalculateTotal = (items) => {
      const total = items.reduce(
        (acc, item) => acc + item.price * (item.quantity || 1), 
        0
      );
      setTotalPrice(total);
    };

    useEffect(() => {
      recalculateTotal(cartItems);
    }, [cartItems]);

    return (
      <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                data={cartItem}
                onQuantityChange={handleQuantityChange}
              />
            ))
          ) : (
            <div>
              <h3>Nenhum produto adicionado</h3>
            </div>
          )}
        </div>
        <div className="cart-resume">
          <h3>Total: {formatCurrency(totalPrice, 'BRL')}</h3>
        </div>
      </section>
    );
}

export default Cart;