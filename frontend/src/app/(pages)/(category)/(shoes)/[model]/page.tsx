import React, { FC } from 'react';
import SalesSlideLine from '@/app/components/sale-slide-line';
import Content from './components/content';

const SALE_INFO_DATA: { title: string; text: string }[] = [
    { title: 'MEMBERS: FREE SHIPPING ON ORDERS $50+', text: 'Sign Up' },
    { title: 'SAVE UP TO 40%', text: 'Shop All Our New Markdowns' },
    {
        title: 'Get Your Gear Faster',
        text: 'Look for Store Pickup at Checkout',
    },
];

const getShoes = async (slug: string) => {
    const res = await fetch(`http://localhost:5000/${slug}/`, {
        cache: 'no-store',
    });
    return res.json();
};

interface IShoesListByModel {
    params: {
        model: string;
    };
}

const ShoesListByModel: FC<IShoesListByModel> = async ({ params }) => {
    const shoes = await getShoes(params.model);

    return (
        <>
            <div className="bg-white">
                <SalesSlideLine data={SALE_INFO_DATA} />
                <div className="container pt-9">
                    <span className="capitalize">Jordan / Shoes</span>
                </div>
                <Content data={shoes} model={params.model} />
            </div>
        </>
    );
};

export default ShoesListByModel;
