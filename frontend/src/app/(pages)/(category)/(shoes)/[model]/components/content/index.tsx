'use client';
import FilterShoes from '@/app/components/filter-shoes';
import ProductsList from '@/app/components/products-list';
import FilterIcon from '@/app/icons/FilterIcon';
import { AnimatePresence, motion } from 'framer-motion';
import React, { FC } from 'react';
import SortBy from '../../../../../../components/sort-by';
import { IShoe } from '@/app/types/interfaces';
import ProductCard from '@/app/components/product-card';

interface IContent {
    data: IShoe;
    model: string;
}

const Content: FC<IContent> = ({ data, model }) => {
    const [showFilters, setShowFilters] = React.useState(true);
    return (
        <>
            {' '}
            <div className="container sticky top-0 z-50 flex items-center justify-between bg-white py-4 capitalize">
                <h1 className="text-2xl capitalize">
                    Mens {model} Shoes(data.length)
                </h1>
                <div className="flex gap-8">
                    <button
                        type="button"
                        className="flex gap-2"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        Hide filter
                        <FilterIcon />
                    </button>
                    <SortBy />
                </div>
            </div>
            <div className="px-12 pb-3 pt-4">
                <div className="flex justify-between gap-5 m960:gap-10">
                    <AnimatePresence>
                        {showFilters && (
                            <motion.div
                                initial={{ x: '-100%', opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    x: '-100%',
                                    opacity: 0,
                                    display: 'none',
                                }}
                                transition={{
                                    ease: 'easeOut',
                                    duration: 0.2,
                                }}
                            >
                                <FilterShoes />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <ProductsList
                        data={data}
                        renderData={(data) => (
                            <ProductCard
                                data={data}
                                key={data.id}
                                model={model}
                            />
                        )}
                    />
                </div>
            </div>
        </>
    );
};

export default Content;
