import React from 'react';
import { useRouter } from 'next/router';
import ProductCard from '@/app/components/product-card';

const ProductsList = () => {
    return (
        <div className="mb-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
