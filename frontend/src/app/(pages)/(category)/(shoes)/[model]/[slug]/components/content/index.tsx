'use client';
import React, { FC, useState } from 'react';
import Accordion from '@/app/ui/Accordion/Accordion';
import ProductDetailsCarousel from '@/app/components/product-details-carousel';
import { IShoes } from '@/app/types/interfaces';
import { useAppDispatch } from '@/redux/hook';
import { addToCart } from '@/redux/features/cart/cartSlice';

interface IContent {
    data: IShoes;
}

const Content: FC<IContent> = ({ data }) => {
    const [size, setSize] = useState<number | null>(null);
    const [isValisSize, setIsValisSize] = useState<boolean>(true);
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        if (size) {
            const { images, sizes, ...restData } = data;
            dispatch(
                addToCart({
                    ...restData,
                    size: size,
                    quantity: 1,
                })
            );
        } else {
            setIsValisSize(false);
        }
    };

    const handleSlectSize = (size: number) => {
        setSize(size);
        setIsValisSize(true);
    };

    return (
        <div className="grid grid-cols-1 px-2 pt-12 m960:grid-cols-[2fr_1.4fr]">
            <div className="top-12 grid aspect-square w-full overflow-hidden m960:sticky m960:max-h-[680px]">
                <div className="block px-6 pb-3 m960:hidden">
                    <h1 className="text-3xl font-semibold">{data.title}</h1>
                    <p className="mb-4">{data.category}</p>
                    <p>{data.price}</p>
                </div>
                <ProductDetailsCarousel data={data.images} />
            </div>
            <div className="grid min-w-[500px] pl-6 pr-12">
                <div className="hidden m960:block">
                    <h1 className="text-3xl font-semibold">{data.title}</h1>
                    <p className="mb-4">{data.category}</p>
                    <p>$ {data.price}</p>
                </div>
                <div className="grid gap-12">
                    <div>
                        <div className="mt-10 flex justify-between">
                            <span
                                className={`${!isValisSize && 'text-red-600'} inline-block px-8 py-2 font-semibold`}
                            >
                                Select Size{' '}
                            </span>
                            <span className="inline-block px-8 py-2 font-semibold">
                                Size Guide
                            </span>
                        </div>
                        <div
                            className={`grid grid-cols-5 gap-3 ${!isValisSize && 'rounded-md border border-red-600'}`}
                        >
                            {data.sizes.map((item, index) => (
                                <button
                                    type="button"
                                    key={index}
                                    onClick={() => handleSlectSize(item.size)}
                                    disabled={!item.enabled}
                                    className={`w-full justify-center ${size === item.size && item.enabled ? 'border-2 border-gray-900' : ''} rounded-md border-2 py-1  ${item.enabled ? 'cursor-pointer bg-white hover:border-gray-900 focus-visible:border-gray-900' : 'cursor-not-allowed bg-gray-200 text-gray-400'}`}
                                >
                                    {item.size}
                                </button>
                            ))}
                        </div>
                        {!isValisSize && (
                            <p className="font-semibold text-red-600">
                                Please select a size.
                            </p>
                        )}
                    </div>
                    <div className="grid gap-6">
                        <p className="text-center">
                            4 interest-free payments of $31.25 with{' '}
                            <p>
                                <span className="font-semibold">Klarna.</span>
                                <button type="button" className="underline">
                                    {' '}
                                    Learn More
                                </button>
                            </p>
                        </p>
                        <div className="grid gap-2">
                            <button
                                className="w-full rounded-[30px] border border-black bg-black py-4 text-center text-white"
                                onClick={handleAddToCart}
                            >
                                Add to bag
                            </button>
                            <button className="w-full rounded-[30px] border border-black bg-white py-4 text-center text-black">
                                Favorite
                            </button>
                        </div>
                        <p className="text-center text-gray-500">
                            This product is excluded from site promotions and
                            discounts.
                        </p>
                    </div>
                    <div className="grid gap-6">
                        <div>
                            <p className="font-semibold">Shipping</p>
                            <p>
                                You&apos;ll see our shipping options at checkout
                            </p>
                        </div>
                        <div>
                            <p>Free Pickup in 2 hours</p>
                            <p>Find a Store</p>
                        </div>
                    </div>
                    <div>
                        <p className="my-10">
                            It&apos;s not over until you hear that buzzer. Fly
                            through your game with energy to spare in the Tatum
                            2. It helps you stay light on your feet by limiting
                            the use of heavy rubber. A full-length Nike Air
                            Strobel unit supports your quick shifts, and a
                            sturdy frame pairs with supportive foam that molds
                            to your feet for a contained feel.
                        </p>
                        <ul className="list-disc">
                            <li>Shown: White/Black/Hyper Pink/Volt</li>
                            <li>Style: FZ8824-100</li>
                        </ul>
                        <button>View Product Details</button>
                        <Accordion
                            title={'Shipping & Returns'}
                            titleClassName="text-xl"
                        >
                            <p>
                                Free standard shipping on orders $50+ and free
                                60-day returns for Nike Members. Learn more.
                                Return policy exclusions apply.
                            </p>
                            <p>Pick-up available at select Nike Stores.</p>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
