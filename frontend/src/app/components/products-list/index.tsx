import React from 'react';
import ProductCard from '@/app/components/product-card';

const ProductsList = () => {
    return (
        <div className="my-14 grid grid-cols-1 gap-5 pl-5 md:grid-cols-2 md:pl-10 lg:grid-cols-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
};

export default ProductsList;
