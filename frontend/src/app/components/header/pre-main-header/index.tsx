import ConversIcon from '@/assets/ConversIcon';
import JordanIcon from '@/assets/JordanIcon';
import Link from 'next/link';
import React from 'react';
import List from '../../list';
import { title } from 'process';

const Links = [
    { title: 'find a store', path: '#' },
    { title: 'help', path: '#' },
    { title: 'join us', path: '#' },
    { title: 'sign in', path: '#' },
];
const PreNavBar = () => {
    return (
        <div className="bg-gray-100 py-[5px]">
            <div className="container flex h-9 items-center justify-between">
                <ul className="flex-c-c h-full">
                    <li>
                        <Link
                            href=""
                            className="flex-c-c w-max px-3 hover:text-gray-500"
                        >
                            <JordanIcon />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href=""
                            className="flex-c-c w-max px-3 hover:text-gray-500"
                        >
                            <ConversIcon />
                        </Link>
                    </li>
                </ul>
                <List
                    data={Links}
                    className="flex-c-c h-full w-full max-w-fit text-xs"
                    renderData={(link, index) => (
                        <li key={link.title}>
                            {index ? <span>|</span> : null}
                            <Link
                                href={link.path}
                                className="mx-2 cursor-pointer px-1 font-helvetica font-semibold capitalize hover:text-gray-500"
                            >
                                {link.title}
                            </Link>
                        </li>
                    )}
                />
            </div>
        </div>
    );
};

export default PreNavBar;
