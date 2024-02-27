'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NikeLogo from '@/assets/NikeLogo';
import Search from '../search';
import ProductNav from '../product-nav';
import { PiBagSimpleLight, PiHeartStraight } from 'react-icons/pi';

// const NAV_LINKS = [
//     'New & Featured',
//     'Men',
//     'Women',
//     'Kids',
//     'Accessories',
//     'Sale',
// ];

const NavBar = () => {

    return (
        <div className="h-16 w-full bg-white">
            <div className="container">
                <nav className="flex h-full items-center justify-between">
                    <Link
                        href={'/'}
                        className="block h-full w-20 hover:text-gray-500"
                    >
                        <NikeLogo />
                    </Link>
                    <ProductNav />
                    <div className="flex h-full items-center justify-end gap-3">
                        <Search />
                        <Link
                            href={''}
                            className="h-9 w-9 rounded-full p-1.5 hover:bg-gray-300"
                            title="Favorites"
                        >
                            <PiHeartStraight className="h-full w-full" />
                        </Link>
                        <Link
                            href={''}
                            className="relative h-9 w-9 rounded-full p-1.5 hover:bg-gray-300"
                            title="Bag items:0"
                        >
                            <PiBagSimpleLight className="h-full w-full" />
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%] text-[9px] text-black ">
                                1
                            </span>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
