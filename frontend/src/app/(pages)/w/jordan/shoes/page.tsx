import ProductsList from '@/app/components/products-list';
import React from 'react';

const page = () => {
    return (
        <div className="px-12 pb-3 pt-4">
            <div>
                <span className="capitalize">Jordan / Shoes</span>
            </div>
            <div className="capitalize">
                <h1>Mens Jordan Shoes(103)</h1>
            </div>
            <ProductsList />
        </div>
    );
};

export default page;
