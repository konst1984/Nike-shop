import { StringifyOptions } from 'querystring';
import React, { FC } from 'react';

interface ICheckBoxInnerLabel {
    label?: string | number;
    classLabel?: string;
    classInput?: string;
    color?: string;
}
const CheckBoxInnerLabel: FC<ICheckBoxInnerLabel> = ({
    label,
    classLabel,
    classInput = 'rounded h-5 w-5 border-gray-500',
    color = 'bg-white',
}) => {
    return (
        <label
            className={`relative flex h-full ${classLabel} bordergray-400 cursor-pointer items-center overflow-hidden rounded-md`}
        >
            <input
                type="checkbox"
                className={`relative h-full cursor-pointer appearance-none rounded-md border-2 hover:border-gray-900 focus-visible:border-gray-900  ${classInput} border bg-transparent transition-all checked:border-gray-900`}
                style={{ backgroundColor: `${color}` }}
            />
            <span className="absolute left-2/4 top-2/4 -z-[1] flex h-full w-full -translate-x-2/4 -translate-y-2/4 items-center justify-center bg-white">
                {label}
            </span>
        </label>
    );
};

export default CheckBoxInnerLabel;
