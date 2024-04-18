'use client';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import List from '../list';
import { LinksDataType } from '../footer/data';

interface IListWrapper {
    data: LinksDataType;
    title: string;
}

const ListWrapper: FC<IListWrapper> = ({ data, title }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="mb-6 sm:mb-0">
            <button
                className="cursor-pointer font-semibold capitalize text-stone-700 sm:mb-6 sm:cursor-auto"
                onClick={() => setShow(!show)}
            >
                {title}
            </button>
            <div
                className={`${show ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} grid overflow-hidden transition-all duration-300 sm:block`}
            >
                <div className="grid min-h-0 gap-2">
                    {' '}
                    <List
                        data={data}
                        className="mt-6 grid shrink-0 gap-2 pl-6 sm:mt-0 sm:flex sm:flex-col sm:pl-0"
                        renderData={(link) => (
                            <li
                                key={link.title}
                                className="truncate text-stone-500 sm:group-hover:whitespace-normal"
                            >
                                <Link
                                    href={link.path}
                                    target="_blank"
                                    className="text-md cursor-pointer font-semibold capitalize hover:text-stone-700 focus-visible:text-stone-700 sm:group-hover:truncate sm:group-hover:whitespace-normal"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default ListWrapper;
