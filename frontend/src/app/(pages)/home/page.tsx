'use client';
import HeroBanner from '@/app/components/hero-banner';
import SalesSlideLine from '@/app/components/sale-slide-line';
import Carousel from '@/app/components/carousel';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import ProductCard from '@/app/components/product-card';
import CarouselSlide from '@/app/components/carousel/carousel-slide';

const TrendingImages = [
    { text: 'New Arrivals From Jordan', imagePath: '/trending_1.png' },
    { text: 'Layer up', imagePath: '/trending_2.jpg' },
    { text: 'bloom run collection', imagePath: '/trending_3.jpg' },
    { text: 'nike tech', imagePath: '/trending_4.jpg' },
];

const SALE_INFO_DATA: { title: string; text: string }[] = [
    {
        title: 'Get Your Gear Faster',
        text: 'Look for Store Pickup at Checkout',
    },
    { title: 'Members: Free Shipping on Orders $50+', text: 'Sign Up' },
    {
        title: 'Extra 25% Off Select Styles',
        text: 'Sign in & use code MEMBER25. Not a Member? Use code GET20.',
    },
];

const Home = () => {
    return (
        <div>
            <SalesSlideLine data={SALE_INFO_DATA} />
            <HeroBanner />
            <Carousel
                title="trending"
                slides={TrendingImages}
                renderSlider={(slideContent, index) => (
                    <CarouselSlide slideContent={slideContent} index={index} />
                )}
            />
        </div>
    );
};

export default Home;
