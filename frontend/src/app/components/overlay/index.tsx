'use client';
import React, { FC } from 'react';
import { createPortal } from 'react-dom';

interface IOverlay {
    trigger: boolean;
}
const Overlay: FC<IOverlay> = ({ trigger }) => {
    return (
        <div
            className={`${trigger ? '-bottom-96 block h-96' : 'bottom-0 h-0'} transition-height absolute w-full bg-white duration-200`}
        >
            {createPortal(
                <div
                    className={`overlay ${trigger ? 'block' : 'hidden'} fixed inset-0 z-[1000]`}
                />,
                document?.body
            )}
        </div>
    );
};

export default Overlay;
