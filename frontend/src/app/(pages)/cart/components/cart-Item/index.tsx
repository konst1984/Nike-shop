import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PiHeartStraight } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CartItem = () => {
    return (
        <div className="border-b border-b-gray-300 py-6">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-[auto_1fr]">
                <div>
                    <Image
                        src="/product-1.webp"
                        width={164}
                        height={164}
                        alt="PayPal"
                        className="w-full sm:w-[164px]"
                    />
                </div>
                <div>
                    <div className="grid grid-cols-[1fr_auto] font-bold">
                        <h2>Air Jordan 9 Retro &quot;Powder Blue&quot;</h2>
                        <span>$1,890.00</span>
                    </div>
                    <p>Men&apos;s Shoes</p>
                    <p>Summit White/Dark Powder Blue/Black</p>
                    <div className="flex gap-2">
                        <label>
                            Size
                            <select name="Size" id="">
                                <option value="">7</option>
                                <option value="">8</option>
                                <option value="">9</option>
                                <option value="">10</option>
                                <option value="">11</option>
                                <option value="">12</option>
                                <option value="">13</option>
                            </select>
                        </label>
                        <label>
                            Quantity
                            <input
                                type="number"
                                min={0}
                                defaultValue={1}
                                className="select-number ml-2 w-12 px-2"
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
