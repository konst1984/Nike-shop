import React, { FC } from 'react';

interface ILinkShop extends React.HTMLAttributes<HTMLAnchorElement> {
    path: string;
    className?: string;
    title?: string;
}
const LinkShop: FC<ILinkShop> = ({
    path,
    className = 'bg-black text-white',
    title = 'shop',
    ...rest
}) => {
    return (
        <a
            href={path}
            target="_self"
            tabIndex={0}
            aria-label="Shop"
            className={`flex w-fit justify-center rounded-3xl px-5 py-2.5 font-helvetica font-bold capitalize duration-200 hover:bg-zinc-400 focus-visible:bg-zinc-400 ${className}`}
            {...rest}
        >
            {title}
        </a>
    );
};

export default LinkShop;
