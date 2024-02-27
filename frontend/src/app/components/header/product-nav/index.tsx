import Link from 'next/link';
import React, { Fragment } from 'react';
import List from '../../list';
import { BsChevronDown } from 'react-icons/bs';
import SubNav from '../sub-nav';

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

const ProductNav = () => {
    return (
        <div className="h-full">
            <List
                className="flex h-full items-center justify-center"
                data={NAV_LINKS}
                renderData={(link) => (
                    <li
                        key={link.id}
                        className="group h-full"
                    >
                        <Link
                            href={link.path ?? '#'}
                            className="flex h-full items-center border-b-2 border-transparent px-3 font-helvetica font-semibold capitalize hover:border-b-2 hover:border-black"
                        >
                            {link.title}
                        </Link>
                            <SubNav title={link.title}/>
                    </li>
                )}
            />
        </div>
    );
};

export default ProductNav;
