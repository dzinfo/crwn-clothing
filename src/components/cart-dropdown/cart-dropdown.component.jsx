import React from 'react';
import CustoButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <CustoButton>GO TO CHECKOUT</CustoButton>
    </div>
)

export default CartDropDown;
