import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PiHeartStraight } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IShoeCart } from '@/app/types/interfaces';
import { useAppDispatch } from '@/redux/hook';
import {
    removeFromCart,
    updateCartItem,
} from '@/redux/features/cart/cartSlice';

interface ICartItem {
    item: IShoeCart;
}

const CartItem: FC<ICartItem> = ({ item }) => {
    const dispatch = useAppDispatch();
    const handleChange = (
        e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        const { value, name } = e.target;
        const newItem = {
            ...item,
            [name]: name === 'quantity' ? +value : value,
            totalPrice:
                name === 'quantity' ? +value * item.price : item.totalPrice,
        };
        dispatch(updateCartItem(newItem));
    };

    return (
        <div className="border-b border-b-gray-300 py-6">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-[auto_1fr]">
                <div>
                    <Image
                        src={`/${item.thumbnail}`}
                        width={164}
                        height={164}
                        alt="PayPal"
                        className="w-full sm:w-[164px]"
                    />
                </div>
                <div>
                    <div className="grid grid-cols-[1fr_auto] font-bold">
                        <h2>{item.title}</h2>
                        <span>${item.totalPrice}</span>
                    </div>
                    <p>{item.category}</p>
                    <p>Summit White/Dark Powder Blue/Black</p>
                    <div className="flex gap-2">
                        <label>
                            Size
                            <select
                                name="selectedSize"
                                // id=""
                                // defaultValue={item.selectedSize}
                                onChange={handleChange}
                            >
                                {item.sizes
                                    .filter((item) => item.enabled)
                                    .map((elem) => (
                                        <option
                                            key={elem.size}
                                            value={elem.size}
                                            selected={
                                                elem.size === item.selectedSize
                                            }
                                        >
                                            {elem.size}
                                        </option>
                                    ))}
                            </select>
                        </label>
                        <label>
                            Quantity
                            <input
                                type="number"
                                min={0}
                                max={10}
                                name="quantity"
                                defaultValue={item.quantity}
                                className="select-number ml-2 w-12 px-2"
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <Link
                            href="/favorites"
                            className={`${''} block h-9 w-9 rounded-full p-1.5 hover:bg-gray-300`}
                            title="Favorites"
                        >
                            <PiHeartStraight className="h-full w-full" />
                        </Link>
                        <button
                            type="button"
                            className={`${''} block h-9 w-9 rounded-full p-1.5 hover:bg-gray-300`}
                            title="Delete item"
                            onClick={() => dispatch(removeFromCart(item))}
                        >
                            <RiDeleteBin6Line className="h-full w-full" />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <p>Shipping</p>
                <p>Arrives by Fri, Apr 19Edit Location</p>
            </div>
            <p className="mt-6 font-bold">Free Pickup</p>
        </div>
    );
};

export default CartItem;
