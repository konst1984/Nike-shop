import React from 'react';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import { TiSocialYoutubeCircular, TiSocialInstagram } from 'react-icons/ti';
import Link from 'next/link';
import List from '../list';
import {
    BOTTOM_LINKS,
    LEFT_LINKS,
    MIDDLE_LEFT_LINKS,
    MIDDLE_RIGHT_LINKS,
    RIGHT_LINKS,
} from './links-data';
import Accordion from '@/app/ui/Accordion';

function Footer() {
    return (
        <footer className="bg-black pb-3 pt-14 text-white">
            <div className="container">
                <div className="mx-auto flex w-full flex-col justify-between gap-10 md:flex-row">
                    <div className="mx-auto flex w-full flex-col flex-wrap justify-between gap-4 md:flex-row">
                        <List
                            className="flex flex-col gap-2 border-b-[1px] border-[#323232] py-2 md:border-none md:p-0"
                            renderData={(link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.path}
                                        target="_blank"
                                        className="cursor-pointer font-oswald text-sm font-medium uppercase"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            )}
                            data={LEFT_LINKS}
                        />

                        <List
                            className="hidden shrink-0 flex-col gap-2 md:flex md:max-w-40"
                            renderData={(link, index) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.path}
                                        target="_blank"
                                        className={`${index === 0 ? 'font-oswald text-sm font-medium uppercase' : 'cursor-pointer font-helvetica text-xs  capitalize text-white/[0.5] hover:text-white'}`}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            )}
                            data={MIDDLE_LEFT_LINKS}
                        />

                        <List
                            className="hidden shrink-0 flex-col gap-2 md:flex md:max-w-40"
                            renderData={(link, index) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.path}
                                        target="_blank"
                                        className={`${index === 0 ? 'font-oswald text-sm font-medium uppercase' : 'cursor-pointer font-helvetica text-xs capitalize text-white/[0.5] hover:text-white'}`}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            )}
                            data={MIDDLE_RIGHT_LINKS}
                        />

                        <List
                            className="hidden shrink-0 flex-col gap-2 md:flex md:max-w-40"
                            renderData={(link, index) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.path}
                                        target="_blank"
                                        className={`${index === 0 ? 'font-oswald text-sm font-medium uppercase ' : 'cursor-pointer font-helvetica text-xs capitalize text-white/[0.5] hover:text-white'}`}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            )}
                            data={RIGHT_LINKS}
                        />

                        <Accordion data={MIDDLE_LEFT_LINKS} />
                        <Accordion data={MIDDLE_RIGHT_LINKS} />
                        <Accordion data={RIGHT_LINKS} />
                    </div>

                    <div className="flex gap-4 md:justify-start">
                        <a
                            href="https://twitter.com"
                            className="flex h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-black hover:bg-white/[0.5]"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="https://facebook.com"
                            className="flex h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-black hover:bg-white/[0.5]"
                        >
                            <FaFacebookF size={24} />
                        </a>
                        <a
                            href="https://youtube.com"
                            className="flex h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-black hover:bg-white/[0.5]"
                        >
                            <TiSocialYoutubeCircular size={32} />
                        </a>
                        <a
                            href="https://instagram.com"
                            className="flex h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-black hover:bg-white/[0.5]"
                        >
                            <TiSocialInstagram size={32} />
                        </a>
                    </div>
                </div>

                <List
                    className="flex flex-wrap justify-end gap-2 text-center md:gap-5 md:text-left"
                    renderData={(link) => (
                        <li key={link.title}>
                            <Link
                                href={link.path}
                                target="_blank"
                                className="cursor-pointer text-xs text-white/[0.5] hover:text-white"
                            >
                                {link.title}
                            </Link>
                        </li>
                    )}
                    data={BOTTOM_LINKS}
                />

                <div className="mx-auto mt-10 flex w-full flex-col justify-between gap-[10px] pb-5 font-helvetica md:flex-row md:gap-0">
                    <div className="cursor-pointer text-center text-xs text-white/[0.5] hover:text-white md:text-left">
                        © 2023 Nike, Inc. All Rights Reserved
                    </div>
                    <p className="cursor-pointer text-xs text-white/[0.5] hover:text-white">
                        CA Supply Chains Act
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
