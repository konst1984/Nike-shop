'use client';
import ButtonCircle from '@/app/ui/ButtonCircle';
import SearchIcon from '@/assets/SearchIcon';
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { PiBagSimpleLight } from 'react-icons/pi';
import { FiUser } from 'react-icons/fi';
import { CgMenu } from 'react-icons/cg';
import NikeLogo from '@/assets/NikeLogo';
import SearchForm from '../header/search-form';
interface MobileNavBarProps {
    showMenu: boolean;
    setShowMenu: (value: boolean) => void;
    searchValue: string;
    setSearchValue: (value: string) => void;
    searchBarOpen: boolean;
    setSearchBarOpen: (value: boolean) => void;
}

const MobileNavBar: FC<MobileNavBarProps> = ({
    showMenu,
    searchValue,
    searchBarOpen,
    setShowMenu,
    setSearchValue,
    setSearchBarOpen,
}) => {
    return (
        <>
            <div className="md960:hidden relative block h-16 w-full bg-white">
                <div className="container flex h-fit w-full justify-between bg-white">
                    <Link
                        href={'/'}
                        className="block h-full w-20 hover:text-gray-500"
                    >
                        <NikeLogo />
                    </Link>
                    <div className="flex w-full items-center justify-end gap-1">
                        <SearchForm
                            value={searchValue}
                            setSearchValue={setSearchValue}
                            searchBarOpen={searchBarOpen}
                            setSearchBarOpen={setSearchBarOpen}
                            desktop={false}
                        />
                        <Link
                            href={''}
                            className={`${searchBarOpen ? 'hidden' : 'flex-c-c'} relative h-9 w-9 rounded-full hover:bg-gray-300`}
                            title="Bag items:0"
                        >
                            <PiBagSimpleLight size={24} />
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%] text-[9px] text-black">
                                1
                            </span>
                        </Link>
                        <Link
                            href={''}
                            className={`${searchBarOpen ? 'hidden' : 'flex-c-c'} h-9 w-9 rounded-full hover:bg-gray-300`}
                            title="Account"
                        >
                            <FiUser size={24} />
                        </Link>
                        <ButtonCircle
                            onClick={() => setShowMenu(!showMenu)}
                            className={`${searchBarOpen ? 'hidden' : 'flex-c-c'} h-9 w-9`}
                        >
                            <CgMenu size={24} />
                        </ButtonCircle>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNavBar;
