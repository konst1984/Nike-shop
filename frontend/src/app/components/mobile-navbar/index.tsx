'use client';
import ButtonCircle from '@/app/ui/ButtonCircle';
import SearchIcon from '@/assets/SearchIcon';
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { PiBagSimpleLight } from 'react-icons/pi';
import { FiUser } from 'react-icons/fi';
import { CgMenu } from 'react-icons/cg';
import NikeLogo from '@/assets/NikeLogo';
interface MobileNavBarProps {
    showMenu: boolean;
    setShowMenu: (value: boolean) => void;
}

const MobileNavBar: FC<MobileNavBarProps> = ({ showMenu, setShowMenu }) => {
    return (
        <>
            <div className="container hidden w-full justify-between bg-white *:h-16">
                <Link
                    href={'/'}
                    className="block h-full w-20 hover:text-gray-500"
                >
                    <NikeLogo />
                </Link>
                <div className="flex-c-c">
                    <ButtonCircle className="h-9 w-9">
                        <SearchIcon />
                    </ButtonCircle>
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
                    <Link
                        href={''}
                        className="h-9 w-9 rounded-full p-1.5 hover:bg-gray-300"
                        title="Account"
                    >
                        <FiUser className="h-full w-full" />
                    </Link>
                    <ButtonCircle
                        onClick={() => setShowMenu(!showMenu)}
                        className="h-9 w-9"
                    >
                        <CgMenu />
                    </ButtonCircle>
                </div>
            </div>
        </>
    );
};

export default MobileNavBar;
