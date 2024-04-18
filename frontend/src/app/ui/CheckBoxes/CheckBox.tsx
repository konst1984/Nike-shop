import { StringifyOptions } from 'querystring';
import React, { FC } from 'react';

interface ICheckBox extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string | number;
    display?: string;
    classInput?: string;
    color?: string;
    dataKey?: string;
}
const CheckBox: FC<ICheckBox> = ({
    label,
    display = 'flex',
    classInput = 'rounded h-5 w-5 border-gray-500',
    color = 'bg-white',
    dataKey,
    ...rest
}) => {
    return (
        <div className={`${display} items-center`}>
            <label className="relative mr-1 flex w-fit cursor-pointer items-center justify-center rounded-full">
                <input
                    type="checkbox"
                    className={`peer relative m-auto cursor-pointer appearance-none ${classInput} border bg-white transition-all checked:border-gray-900 checked:bg-gray-900`}
                    id={String(label).toLowerCase()}
                    data-key={dataKey?.toLowerCase()}
                    style={{ backgroundColor: `${color}` }}
                    {...rest}
                />
                <span
                    className={`pointer-events-none absolute left-2/4 top-2/4 flex h-full w-full -translate-x-2/4 -translate-y-2/4 items-center justify-center ${color === 'white' ? 'text-black' : 'text-white'} opacity-0 transition-opacity peer-checked:opacity-100`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[80%] w-[80%]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </span>
            </label>
            <label
                className="mt-px cursor-pointer select-none font-light capitalize text-gray-700"
                htmlFor={String(label)}
            >
                {label}
            </label>
        </div>
    );
};

export default CheckBox;
