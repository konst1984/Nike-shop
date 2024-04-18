import React, { FC } from 'react';

import Content from './components/content';
import SalesSlideLine from '@/app/components/sale-slide-line';
import { PopularImages, SALE_INFO_DATA } from '@/app/components/main/data';
import Carousel from '@/app/components/carousel';

interface IProductDetails {
    params: {
        model: string;
        slug: string;
    };
}

const getShoe = async (path: string) => {
    const res = await fetch(`https://clothes-shop-ubov.onrender.com/${path}`, {
        cache: 'no-store',
    });
    return res.json();
};
const ProductDetails: FC<IProductDetails> = async ({ params }) => {
    const shoe = await getShoe(`${params.model}/${params.slug}`);

    return (
        <>
            <SalesSlideLine data={SALE_INFO_DATA} />
            <div className="bg-white pb-[60px]">
                <div className="m-auto w-full max-w-[1200px]">
                    <Content data={shoe} />

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
