import React, { FC, ReactNode } from 'react';

interface ListProps {
    data: any[];
    renderData: (dataItem: any, index?: number) => ReactNode;
    className?: string;
}
const List: FC<ListProps> = ({
    data,
    renderData,
    className = 'flex md:max-w-40 shrink-0 flex-col gap-2',
}) => {
    return (
        <>
            <ul className={className}>{data.map(renderData)}</ul>
        </>
    );
};

export default List;
