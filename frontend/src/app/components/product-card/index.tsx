import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const ProductCard = () => {
    return (
        <Link
            href={`/1`}
            className="transform cursor-pointer overflow-hidden bg-white"
        >
            <div className="overflow-hidden">
                <Image
                    width={500}
                    height={500}
                    src={'/product-1.webp'}
                    alt={'Product'}
                    className="aspect-square h-auto w-full duration-200 hover:scale-105 "
                />
            </div>
            <div className="grid gap-1">
                <p>Just In</p>
                <p id='Air Jordan 1 High OG "Black &amp; White"' role="link">
                    Air Jordan 1 High OG &quot;Black &amp; White&quot;
                </p>
                <p role="link" className="text-gray-500">
                    Big Kids&apos Shoes
                </p>
                <p aria-label="Available in 1 Color" className="text-gray-500">
                    1 Color
                </p>
                <p data-testid="product-price" role="link">
                    $140
                </p>
            </div>
            {/*<div className="p-4 text-black/[0.9]">*/}
            {/*  <h2 className="text-lg font-medium">{p.name}</h2>*/}
            {/*  <div className="flex items-center text-black/[0.5]">*/}
            {/*    <p className="mr-2 text-lg font-semibold">*/}
            {/*      &#8377;{p.price}*/}
            {/*    </p>*/}

            {/*    {p.original_price && (*/}
            {/*      <>*/}
            {/*        <p className="text-base  font-medium line-through">*/}
            {/*          &#8377;{p.original_price}*/}
            {/*        </p>*/}
            {/*        <p className="ml-auto text-base font-medium text-green-500">*/}
            {/*          {getDiscountedPricePercentage(*/}
            {/*            p.original_price,*/}
            {/*            p.price*/}
            {/*          )}*/}
            {/*          % off*/}
            {/*        </p>*/}
            {/*      </>*/}
            {/*    )}*/}
            {/*  </div>*/}
            {/*</div>*/}
        </Link>
    );
};

export default ProductCard;
