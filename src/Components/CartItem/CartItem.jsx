import React, { useContext, useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { BsCartDashFill } from 'react-icons/bs';

import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../Context/AppContext';

function CartItem({ data, onQuantityChange }) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const [quantidade, setQuantidade] = useState(1); 
  
  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  useEffect(() => {
    onQuantityChange(id, quantidade, price * quantidade);
  }, [quantidade]);

  return (
    <section className="cart-item">
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price * quantidade, 'BRL')}</h3>

        <div className='quantidade'>
          <button onClick={() => setQuantidade((prev) => prev + 1)}>+</button>
            <p>| {quantidade} |</p>
          <button onClick={() => {if (quantidade > 1) setQuantidade((prev) => prev - 1)}}>-</button>
        </div>

        <button
          type="button"
          className="button__remove-item"
          onClick={ handleRemoveItem }
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object.isRequired,
  onQuantityChange: propTypes.func.isRequired,
};
