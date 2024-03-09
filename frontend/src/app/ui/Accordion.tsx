'use client';
import React, { FC, useState } from 'react';
import List from '../components/list';
import Link from 'next/link';
import { PiPlus, PiMinus } from 'react-icons/pi';
import { LinksDataType } from '../components/footer/links-data';

interface AccordionProps {
    data: LinksDataType;
}

const Accordion: FC<AccordionProps> = ({ data }) => {
    const [show, setShow] = useState(false);
    return (
        <div className="md:hidden">
            <div
                className="flex cursor-pointer items-center justify-between"
                key={data[0].title}
                onClick={() => setShow(!show)}
            >
                <p className="cursor-pointer py-4 font-oswald text-sm font-medium uppercase">
                    {data[0].title}
                </p>
                <span>
                    {show ? <PiMinus size={20} /> : <PiPlus size={20} />}
                </span>
            </div>

            <div
                className={`${show ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} grid overflow-hidden py-2 transition-all duration-300`}
            >
                <List
                    className="grid min-h-0 gap-2"
                    renderData={(link, index) => {
                        if (index! > 0) {
                            return (
                                <li key={link.title}>
                                    <Link
                                        href={link.path}
                                        target="_blank"
                                        className={`${index === 0 ? 'font-oswald text-sm font-medium uppercase' : 'cursor-pointer font-helvetica text-xs  capitalize text-white/[0.5] hover:text-white'}`}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            );
                        }
                    }}
                    data={data}
                />
            </div>
        </div>
    );
};

export default Accordion;
