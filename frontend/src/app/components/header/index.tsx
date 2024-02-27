'use client';
import React, { useEffect, useState } from 'react';
import PreNavBar from './pre-main-header';
import NavBar from './navbar';
import MobileNavBar from '../mobile-navbar';
import MobileMenu from '../mobile-menu';

const Header = () => {
    const [translate, setTranslate] = useState('translate-y-0');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

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
        <header
            className={`sticky -top-8 w-full ${translate} z-[1000] duration-300`}
        >
            <PreNavBar />
            <NavBar />
            <MobileNavBar
                showMenu={showMobileMenu}
                setShowMenu={setShowMobileMenu}
            />
            <MobileMenu
                showMenu={showMobileMenu}
                setShowMenu={setShowMobileMenu}
            />
        </header>
    );
};

export default Header;
