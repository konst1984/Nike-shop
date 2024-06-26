import Carousel from '@/app/components/carousel';
import React from 'react';
import {
    MembershipImages,
    PopularImages,
    SportsImages,
    TrendingImages,
} from './data';
import FeaturedSection from '../featured-section';
import BottomSection from '../bottom-section';

const Main = () => {
    return (
        <div className="mb-8 flex flex-col gap-12 px-6">
            <Carousel title="trending" id="trending" slides={TrendingImages} />
            <FeaturedSection />
            <Carousel title="shop by sports" id="sport" slides={SportsImages} />
            <Carousel
                title="popular right now"
                id="popular"
                slides={PopularImages}
            />
            <Carousel
                title="nike membershipImages"
                id="membership"
                slides={MembershipImages}
                classFigure="h-[740px] aspect-[3/4]"
                slideStyle={{
                    aspectRatio: '3/4',
                    maxWidth: '600px',
                    width: 'auto',
                    marginRight: '15px',
                }}
            />
            <BottomSection />
        </div>
    );
};

export default Main;
