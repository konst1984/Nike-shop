import React from 'react';
import {
    LEFT_LINKS,
    MIDDLE_LEFT_LINKS,
    MIDDLE_RIGHT_LINKS,
    RIGHT_LINKS,
} from '../main/data';
import List from '@/app/components/list';
import Link from 'next/link';

const BottomSection = () => {
    return (
        <section>
            <div className="px-5">
                <div className="group mt-[84px] grid max-h-[44px] shrink-0 grid-cols-1 gap-8 overflow-hidden transition-all duration-200 hover:max-h-[1000px] sm:grid-cols-4">
                    <List
                        data={LEFT_LINKS}
                        className="flex shrink-0 flex-col gap-2 md:max-w-40"
                        renderData={(link, index) => (
                            <li
                                key={link.title}
                                className={`truncate group-hover:whitespace-normal ${index === 0 ? 'mb-6 text-stone-700' : 'text-stone-500'}`}
                            >
                                <Link
                                    href={link.path}
                                    target="_blank"
                                    className="text-md cursor-pointer font-semibold capitalize hover:text-stone-700 focus-visible:text-stone-700 group-hover:truncate group-hover:whitespace-normal"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        )}
                    />
                    <List
                        data={MIDDLE_LEFT_LINKS}
                        className="flex shrink-0 flex-col gap-2 md:max-w-40"
                        renderData={(link, index) => (
                            <li
                                key={link.title}
                                className={`truncate group-hover:whitespace-normal ${index === 0 ? 'mb-6 text-stone-700' : 'text-stone-500'}`}
                            >
                                <Link
                                    href={link.path}
                                    target="_blank"
                                    className="text-md cursor-pointer font-semibold capitalize hover:text-stone-700 focus-visible:text-stone-700 group-hover:truncate group-hover:whitespace-normal"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        )}
                    />
                    <List
                        data={MIDDLE_RIGHT_LINKS}
                        className="flex shrink-0 flex-col gap-2  md:max-w-40"
                        renderData={(link, index) => (
                            <li
                                key={link.title}
                                className={`truncate group-hover:whitespace-normal ${index === 0 ? 'mb-6 text-stone-700' : 'text-stone-500'}`}
                            >
                                <Link
                                    href={link.path}
                                    target="_blank"
                                    className="text-md cursor-pointer truncate font-semibold capitalize hover:text-stone-700 focus-visible:text-stone-700 group-hover:whitespace-normal"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        )}
                    />
                    <List
                        data={RIGHT_LINKS}
                        className="flex shrink-0 flex-col gap-2 md:max-w-40"
                        renderData={(link, index) => (
                            <li
                                key={link.title}
                                className={`truncate group-hover:whitespace-normal ${index === 0 ? 'mb-6 text-stone-700' : 'text-stone-500'}`}
                            >
                                <Link
                                    href={link.path}
                                    target="_blank"
                                    className="text-md cursor-pointer font-semibold capitalize hover:text-stone-700 focus-visible:text-stone-700 group-hover:truncate group-hover:whitespace-normal"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        )}
                    />
                </div>
            </div>
        </section>
    );
};

export default BottomSection;
