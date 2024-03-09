import Link from 'next/link';
import React, { FC } from 'react';

const SUB_NAV: {
    [key: string]: {
        id: number;
        title: string;
        path: string | undefined;
        doc_count: number;
    }[];
} = {
    categories: [
        { id: 1, title: 'jordan', path: undefined, doc_count: 11 },
        { id: 2, title: 'Sneakers', path: undefined, doc_count: 8 },
        { id: 3, title: 'running shoes', path: undefined, doc_count: 64 },
        { id: 4, title: 'football shoes', path: undefined, doc_count: 107 },
    ],
};

interface ISubNav {
    title: string;
}
const SubNav: FC<ISubNav> = ({ title }) => {
    if (!SUB_NAV[title]) return null;

    return (
        <div className="absolute left-0 top-[80px] box-content hidden w-full bg-white px-10 pb-10 pt-4 group-hover:block">
            <ul className="mx-auto flex h-full max-w-[1920px] flex-col items-start justify-start px-9">
                {SUB_NAV[title]?.map((link) => (
                    <li className="h-full" key={link.id}>
                        <Link
                            href={link?.path ?? '#'}
                            className="flex h-full items-center px-3 font-helvetica font-semibold capitalize"
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubNav;
