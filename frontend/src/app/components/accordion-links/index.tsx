import React, { FC, useState } from 'react';
import List from '../list';
import Link from 'next/link';
import { PiPlus, PiMinus } from 'react-icons/pi';
import { LinksDataType } from '../footer/data';
import Accordion from '../../ui/Accordion/Accordion';

interface AccordionLinksProps {
    data: LinksDataType;
}

const AccordionLinks: FC<AccordionLinksProps> = ({ data }) => {
    return (
        <div className="md:hidden">
            <Accordion
                title={data[0].title}
                openIcon={<PiMinus size={20} />}
                closeIcon={<PiPlus size={20} />}
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
                                        className={`${index === 0 ? 'font-oswald text-sm font-medium uppercase' : 'cursor-pointer text-xs  capitalize text-white/[0.5] hover:text-white'}`}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            );
                        }
                    }}
                    data={data}
                />
            </Accordion>
        </div>
    );
};

export default AccordionLinks;
