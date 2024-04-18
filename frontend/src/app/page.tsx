import React from 'react';
import HeroBanner from '@/app/components/hero-banner';
import SalesSlideLine from '@/app/components/sale-slide-line';
import { SALE_INFO_DATA } from './home-components/main/data';
import Main from './home-components/main';

const Home = () => {
    return (
        <>
            <SalesSlideLine data={SALE_INFO_DATA} />
            <HeroBanner />
            <Main />
        </>
    );
};

export default Home;
