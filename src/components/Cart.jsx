import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';
import { selectCartState, setCloseCart } from '../app/CartSlice';

const Cart = () => {

  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);

  const onCartToggle = () => {
      dispatch(setCloseCart ({
          CartState: false,
      }));
  }

  return (
    <div>
        <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}>
            <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
                <CartCount onCartToggle={onCartToggle} />
                <CartEmpty/>
                <CartItem/>
            </div>
        </div>
    </div>
  )
}

export default Cart