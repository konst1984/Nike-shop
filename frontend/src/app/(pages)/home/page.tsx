'use client';
import React from 'react';
import HeroBanner from '@/app/components/hero-banner';
import SalesSlideLine from '@/app/components/sale-slide-line';
import { SALE_INFO_DATA } from './components/main/data';
import Main from './components/main';

const Home = () => {
    return (
        <div>
            <SalesSlideLine data={SALE_INFO_DATA} />
            <HeroBanner />
            <Main />
        </div>
    );
};

export default Home;
