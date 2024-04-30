'use client';
import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import NikeLogo from '@/assets/NikeLogo';
import SearchForm from '../search-form';
import { PiBagSimpleLight, PiHeartStraight } from 'react-icons/pi';
import List from '../../list';
import SubNav from '../sub-nav';
import SearchIcon from '@/assets/SearchIcon';
import { useAppSelector } from '@/redux/hook';

const NAV_LINKS = [
    { id: 1, title: 'home', path: './' },
    { id: 2, title: 'about', path: './about' },
    {
        id: 3,
        title: 'categories',
        subMenu: true,
    },
    { id: 4, title: 'contacts', path: './contacts' },
];

const SUB_NAV_LINKS = [
    { id: 1, title: 'jordan', doc_count: 11 },
    { id: 2, title: 'Sneakers', doc_count: 8 },
    { id: 3, title: 'running shoes', doc_count: 64 },
    { id: 4, title: 'football shoes', doc_count: 107 },
];

// const NAV_LINKS = [
//     'New & Featured',
//     'Men',
//     'Women',
//     'Kids',
//     'Accessories',
//     'Sale',
// ];

interface INavBar {
    searchValue: string;
    searchBarOpen: boolean;
    setSearchValue: (value: string) => void;
    setSearchBarOpen: (value: boolean) => void;
}

const NavBar: FC<INavBar> = ({
    searchValue,
    setSearchValue,
    searchBarOpen,
    setSearchBarOpen,
}) => {
    const cart = useAppSelector((state) => state.cart.cartItems);
    return (
        <div className="relative hidden h-16 w-full bg-white m960:block">
            <div className="container h-fit">
                <nav className="flex h-full items-center justify-between">
                    <Link
                        href={'/'}
                        className="block h-full w-20 hover:text-gray-500"
                    >
                        <NikeLogo />
                    </Link>
                    <List
                        className={`h-full items-center justify-center ${searchBarOpen ? 'hidden' : 'flex'}`}
                        data={NAV_LINKS}
                        renderData={(link) => (
                            <li key={link.id} className="group h-full">
                                <Link
                                    href={link.path ?? '#'}
                                    className="flex h-full items-center border-b-2 border-transparent px-3 font-semibold capitalize hover:border-b-2 hover:border-black"
                                >
                                    {link.title}
                                </Link>
                                <SubNav title={link.title} />
                            </li>
                        )}
                    />
                    <div
                        className={`${searchBarOpen ? 'w-full' : 'w-auto'} flex h-full items-center justify-end gap-3 transition-all duration-200`}
                    >
                        <SearchForm
                            value={searchValue}
                            setSearchValue={setSearchValue}
                            searchBarOpen={searchBarOpen}
                            setSearchBarOpen={setSearchBarOpen}
                        />
                        <Link
                            href="/favorites"
                            className={`${searchBarOpen ? 'hidden' : 'block'} h-9 w-9 rounded-full p-1.5 hover:bg-gray-300`}
                            title="Favorites"
                        >
                            <PiHeartStraight className="h-full w-full" />
                        </Link>
                        <Link
                            href="/cart"
                            className={`${searchBarOpen ? 'hidden' : 'block'} relative h-9 w-9 rounded-full p-1.5 hover:bg-gray-300`}
                            title={`Bag items:${cart.length}`}
                        >
                            <PiBagSimpleLight className="h-full w-full" />
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%] text-[9px] text-black ">
                                {cart.length > 9 ? '9+' : cart.length}
                            </span>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
