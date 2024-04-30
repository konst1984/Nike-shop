'use client';
import { useAppSelector } from '@/redux/hook';
import React from 'react';
import CartItem from '../cart-Item';

const CartList = () => {
    const cartItems = useAppSelector((state) => state.cart.cartItems);
    if (!cartItems.length)
        return (
            <h1 className="py-4 text-center">
                There are no items in your bag.
            </h1>
        );

    return (
        <div>
            {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CartList;
