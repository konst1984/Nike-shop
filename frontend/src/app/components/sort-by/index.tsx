'use client';
import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const SortBy = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative grid">
            <button
                className="flex items-center gap-2"
                onClick={() => setOpen(!open)}
            >
                Sort by
                {open ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </button>
            <div
                className={`absolute right-0 top-full rounded-bl-3xl ${open ? 'grid grid-rows-[1fr]' : 'hidden grid-rows-[0fr]'} overflow-hidden transition-all duration-300`}
            >
                <div className="z-[50] grid min-h-0 w-[170px] gap-2 bg-white pb-4 pl-6 pr-8 pt-6 shadow-xl">
                    <div className="flex flex-col justify-start capitalize">
                        <button type="button" className="text-start">
                            Price:High-Low
                        </button>
                        <button type="button" className="text-start">
                            Price:Low-High
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortBy;
