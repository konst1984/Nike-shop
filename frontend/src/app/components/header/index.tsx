'use client';
import React, { useEffect, useState } from 'react';
import PreNavBar from './pre-main-header';
import NavBar from './navbar';
import MobileNavBar from '../mobile-navbar';
import MobileMenu from '../mobile-menu';
import { createPortal } from 'react-dom';
import Overlay from '../overlay';

const Header = () => {
    const [translate, setTranslate] = useState('translate-y-0');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [searchBarOpen, setSearchBarOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (showMobileMenu) {
            return;
        }
        const scrollHandler = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > 200) {
                    if (window.scrollY > lastScrollY) {
                        setTranslate('-translate-y-full');
                    } else {
                        setTranslate('-translate-y-0');
                    }
                    setLastScrollY(window.scrollY);
                }
            }
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [lastScrollY, showMobileMenu]);

    return (
        <>
            <header
                className={`md960:${searchBarOpen ? '-top-16' : '-top-8'} sticky top-0 w-full ${translate} z-[1100] duration-300`}
            >
                <PreNavBar searchBarOpen={searchBarOpen} />
                <NavBar
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    searchBarOpen={searchBarOpen}
                    setSearchBarOpen={setSearchBarOpen}
                />
                <MobileNavBar
                    showMenu={showMobileMenu}
                    setShowMenu={setShowMobileMenu}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    searchBarOpen={searchBarOpen}
                    setSearchBarOpen={setSearchBarOpen}
                />
                <MobileMenu
                    showMenu={showMobileMenu}
                    setShowMenu={setShowMobileMenu}
                />
                <Overlay trigger={searchBarOpen} />
            </header>
        </>
    );
};

export default Header;
