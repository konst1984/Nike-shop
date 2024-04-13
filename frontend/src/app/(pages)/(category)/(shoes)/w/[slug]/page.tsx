'use client';
import React from 'react';
import ProductsList from '@/app/components/products-list';
import SalesSlideLine from '@/app/components/sale-slide-line';
import FilterShoes from '@/app/components/filter-shoes';
import FilterIcon from '@/app/icons/FilterIcon';
import SortBy from '../../../components/sort-by';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const SALE_INFO_DATA: { title: string; text: string }[] = [
    { title: 'MEMBERS: FREE SHIPPING ON ORDERS $50+', text: 'Sign Up' },
    { title: 'SAVE UP TO 40%', text: 'Shop All Our New Markdowns' },
    {
        title: 'Get Your Gear Faster',
        text: 'Look for Store Pickup at Checkout',
    },
];

const Page = () => {
    const router = useRouter();
    const [showFilters, setShowFilters] = React.useState(true);

    return (
        <>
            <div className="bg-white">
                <SalesSlideLine data={SALE_INFO_DATA} />
                <div className="container pt-9">
                    <span className="capitalize">Jordan / Shoes</span>
                </div>
                <div className="container sticky top-0 z-50 flex items-center justify-between bg-white py-4 capitalize">
                    <h1 className="text-2xl">Mens Jordan Shoes(103)</h1>
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
                        <ProductsList />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
