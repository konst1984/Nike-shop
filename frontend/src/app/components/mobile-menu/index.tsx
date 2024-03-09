import ButtonCircle from '@/app/ui/ButtonCircle';
import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';

interface MobileMenuProps {
    showMenu: boolean;
    setShowMenu: (value: boolean) => void;
}
const MobileMenu: FC<MobileMenuProps> = ({ showMenu, setShowMenu }) => {
    return (
        <>
            {showMenu &&
                createPortal(
                    <div
                        className={`${showMenu ? 'block translate-x-0' : 'hidden -translate-x-full'} fixed bottom-0 right-0 top-0 z-50 h-full w-72 bg-white pb-36 pl-9 pr-[30px] pt-10`}
                    >
                        <ButtonCircle
                            className="flex-c-c absolute right-2 top-2 h-9 w-9"
                            onClick={() => setShowMenu(false)}
                        >
                            <IoCloseOutline className="h-full w-full" />
                        </ButtonCircle>
                    </div>,
                    document.body
                )}
        </>
    );
};

export default MobileMenu;
