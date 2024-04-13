'use client';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const SaleLine = () => {
    const [isCloseSaleLine, setIsCloseSaleLine] = useState(false);
    return (
        <>
            {' '}
            {!isCloseSaleLine && (
                <div className="mb-4 flex items-center justify-between bg-zinc-300 pl-3">
                    <div>
                        <p className="font-semibold">
                            Spring Sale: Up to 50% Off
                        </p>
                        <p>Use code SPRING. Select Styles.</p>
                    </div>
                    <button
                        type="button"
                        title="Close advertisement sale"
                        className="flex h-12 w-12 items-center justify-center"
                        onClick={() => setIsCloseSaleLine(true)}
                    >
                        <IoClose size={28} />
                    </button>
                </div>
            )}
        </>
    );
};

export default SaleLine;
