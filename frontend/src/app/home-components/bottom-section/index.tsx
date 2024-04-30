import React from 'react';
import {
    LEFT_LINKS,
    MIDDLE_LEFT_LINKS,
    MIDDLE_RIGHT_LINKS,
    RIGHT_LINKS,
} from '../main/data';
import ListWrapper from '@/app/components/list-wrapper';

const BottomSection = () => {
    return (
        <section>
            <div className="sm:px-5">
                <div className="sm:group mt-10 grid shrink-0 grid-cols-1 overflow-hidden transition-all duration-200 sm:mt-[84px] sm:max-h-52 sm:grid-cols-4 sm:gap-8 sm:hover:max-h-[2000px]">
                    <ListWrapper data={LEFT_LINKS} title="Featured" />
                    <ListWrapper data={MIDDLE_LEFT_LINKS} title="shoes" />
                    <ListWrapper data={MIDDLE_RIGHT_LINKS} title="clothing" />
                    <ListWrapper data={RIGHT_LINKS} title="kids" />
                    {/* <div>
                        <div className="mb-6 font-semibold capitalize text-stone-700">
                            shoes
                        </div>
                        <List
                            data={MIDDLE_LEFT_LINKS}
                            className="grid shrink-0 gap-2 sm:flex sm:flex-col"
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
                    <div>
                        <div className="mb-6 font-semibold capitalize text-stone-700">
                            clothing
                        </div>
                        <List
                            data={MIDDLE_RIGHT_LINKS}
                            className="grid shrink-0 gap-2 sm:flex sm:flex-col"
                            renderData={(link) => (
                                <li
                                    key={link.title}
                                    className="truncate text-stone-500 sm:group-hover:whitespace-normal"
                                >
                                    <Link
                                        href={link.path}
                                        target="_blank"
                                        className="text-md cursor-pointer truncate font-semibold capitalize hover:text-stone-700 focus-visible:text-stone-700 sm:group-hover:whitespace-normal"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            )}
                        />
                    </div>
                    <div>
                        <div className="mb-6 font-semibold capitalize text-stone-700">
                            kids
                        </div>
                        <List
                            data={RIGHT_LINKS}
                            className="grid shrink-0 gap-2 sm:flex sm:flex-col"
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
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default BottomSection;
