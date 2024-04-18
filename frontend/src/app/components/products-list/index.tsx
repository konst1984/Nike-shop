import React, { FC } from 'react';
import { IShoes } from '@/app/types/interfaces';

interface IProductsList {
    data: IShoes[];
    renderData: (data: IShoes) => JSX.Element;
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
