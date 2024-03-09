import React, { FC } from 'react';

interface ButtonCircleProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
}
const ButtonCircle: FC<ButtonCircleProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <button
            {...props}
            className={`rounded-full p-1 hover:bg-gray-300 focus-visible:bg-gray-300 ${className}`}
        >
            {children}
        </button>
    );
};

export default ButtonCircle;
