'use client';
import React, { FC, useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
interface IAccordionProps {
    title: string;
    openIcon?: JSX.Element;
    closeIcon?: JSX.Element;
    children: React.ReactNode;
    className?: string;
    titleClassName?: string;
}
const Accordion: FC<IAccordionProps> = ({
    title,
    openIcon = <RiArrowUpSLine />,
    closeIcon = <RiArrowDownSLine />,
    children,
    className,
    titleClassName = 'text-sm font-medium',
}) => {
    const [show, setShow] = useState(false);
    return (
        <div className={className}>
            <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => setShow(!show)}
            >
                <p
                    className={`cursor-pointer py-2 font-oswald ${titleClassName} uppercase`}
                >
                    {title}
                </p>
                <span>{show ? openIcon : closeIcon}</span>
            </div>
            <div
                className={`${show ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} grid overflow-hidden transition-all duration-300`}
            >
                <div className="grid min-h-0 gap-2">{children}</div>
            </div>
        </div>
    );
};

export default Accordion;
