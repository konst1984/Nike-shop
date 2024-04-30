import React, { FC } from 'react';
import { IShoe } from '@/app/types/interfaces';

interface IProductsList {
    data: IShoe[];
    renderData: (data: IShoe) => JSX.Element;
}
const ProductsList: FC<IProductsList> = ({ data, renderData }) => {
    console.log(data);
    return (
        <div className="mb-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.map(renderData)}
        </div>
    );
};

export default ProductsList;
