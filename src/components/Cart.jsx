import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';
import { selectCartState, setCloseCart, selectCartItems } from '../app/CartSlice';

const Cart = () => {

  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);

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

                {cartItems.lenght === 0 ? <CartEmpty/> :  <div>
                  <div className='flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden'>
                    {cartItems?.map((item, i) => (
                      <CartItem key={i} item={item} /> 
                    ))}
                  </div>

                  <div>
                    <div>
                      <h1>Subtotal</h1>
                      <h1>000</h1>
                    </div>
                    <div>
                      <p>Taxes and Shipping Will Calculate At Shipping</p>
                      <button type='button' className=''>
                        Check Out
                      </button>
                    </div>
                  </div>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Cart