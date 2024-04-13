'use client';

import Carousel from '@/app/components/carousel';
import { SIZE } from '@/app/components/filter-shoes/data';
import ProductDetailsCarousel from '@/app/components/product-details-carousel';
import Accordion from '@/app/ui/Accordion/Accordion';
import React, { useState } from 'react';
import { PopularImages, SALE_INFO_DATA } from '../../home/components/main/data';
import SalesSlideLine from '@/app/components/sale-slide-line';

const ProductDetails = () => {
    const [size, setSize] = useState('');
    return (
        <>
            <SalesSlideLine data={SALE_INFO_DATA} />
            <div className="bg-white pb-[60px]">
                <div className="m-auto w-full max-w-[1200px]">
                    <div className="grid grid-cols-1 px-2 pt-12 m960:grid-cols-[2fr_1.4fr]">
                        <div className="top-12 grid aspect-square w-full overflow-hidden m960:sticky m960:max-h-[680px]">
                            <div className="block px-6 pb-3 m960:hidden">
                                <h1 className="text-3xl font-semibold">
                                    Tatum 2
                                </h1>
                                <p className="mb-4">Basketball Shoes</p>
                                <p>$125</p>
                            </div>
                            <ProductDetailsCarousel />
                        </div>
                        <div className="grid min-w-[500px] pl-6 pr-12">
                            <div className="hidden m960:block">
                                <h1 className="text-3xl font-semibold">
                                    Tatum 2
                                </h1>
                                <p className="mb-4">Basketball Shoes</p>
                                <p>$125</p>
                            </div>
                            <div className="grid gap-12">
                                <div>
                                    <div className="mt-10 flex justify-between">
                                        <span className="inline-block px-8 py-2">
                                            Select Size{' '}
                                        </span>
                                        <span className="inline-block px-8 py-2">
                                            Size Guide
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-5 gap-3 pl-2">
                                        {SIZE.options.map((item, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSize(item)}
                                                className={`w-full justify-center ${size === item ? 'border-2 border-gray-900' : ''} rounded-md border-2 bg-white py-1 hover:border-gray-900 focus-visible:border-gray-900`}
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                    {/* </div> */}
                                </div>
                                <div className="grid gap-6">
                                    <p className="text-center">
                                        4 interest-free payments of $31.25 with{' '}
                                        <p>
                                            <span className="font-semibold">
                                                Klarna.
                                            </span>
                                            <button
                                                type="button"
                                                className="underline"
                                            >
                                                {' '}
                                                Learn More
                                            </button>
                                        </p>
                                    </p>
                                    <div className="grid gap-2">
                                        <button className="w-full rounded-[30px] border border-black bg-black py-4 text-center text-white">
                                            Add to bag
                                        </button>
                                        <button className="w-full rounded-[30px] border border-black bg-white py-4 text-center text-black">
                                            Favotite
                                        </button>
                                    </div>
                                    <p className="text-center text-gray-500">
                                        This product is excluded from site
                                        promotions and discounts.
                                    </p>
                                </div>
                                <div className="grid gap-6">
                                    <div>
                                        <p className="font-semibold">
                                            Shipping
                                        </p>
                                        <p>
                                            You&apos;ll see our shipping options
                                            at checkout
                                        </p>
                                    </div>
                                    <div>
                                        <p>Free Pickup in 2 hours</p>
                                        <p>Find a Store</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="my-10">
                                        It&apos;s not over until you hear that
                                        buzzer. Fly through your game with
                                        energy to spare in the Tatum 2. It helps
                                        you stay light on your feet by limiting
                                        the use of heavy rubber. A full-length
                                        Nike Air Strobel unit supports your
                                        quick shifts, and a sturdy frame pairs
                                        with supportive foam that molds to your
                                        feet for a contained feel.
                                    </p>
                                    <ul className="list-disc">
                                        <li>
                                            Shown: White/Black/Hyper Pink/Volt
                                        </li>
                                        <li>Style: FZ8824-100</li>
                                    </ul>
                                    <button>View Product Details</button>
                                    <Accordion
                                        title={'Shipping & Returns'}
                                        titleClassName="text-xl"
                                    >
                                        <p>
                                            Free standard shipping on orders
                                            $50+ and free 60-day returns for
                                            Nike Members. Learn more. Return
                                            policy exclusions apply.
                                        </p>
                                        <p>
                                            Pick-up available at select Nike
                                            Stores.
                                        </p>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div>
                <p>How Others Are Wearing</p>
                <p>
                    It Upload your photo or mention @Nike on Instagram for a
                    chance to be featured.
                </p>
                <button>Upload Your photo</button>
            </div> */}
                    <div className="pl-4 m960:pl-12">
                        <Carousel
                            title="You Might Also Like"
                            id="populars"
                            slides={PopularImages}
                            paddingBottom="120px"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
