'use client';
import React, {FC} from 'react'; // requires a loader
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

interface ISaleInfoLine {
    data:{title:string, text: string}[]
}

const SalesSlideLine: FC<ISaleInfoLine> = ({data}) => {
    return (
        <div className="text-md relative mx-auto h-[58px] w-full bg-gray-100 pt-[10px] font-helvetica font-semibold">
            {' '}
            <Swiper autoplay={true} modules={[Autoplay]}>
                {data.map(item => (
                  <SwiperSlide key={item.title}>
                      <div className="flex-c-c flex-col">
                          {item.title}
                          <a className="text-sm underline" href="">
                              {item.text}
                          </a>
                      </div>
                  </SwiperSlide>
                ))}
            </Swiper>
            {/* <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
            >
                <div className="flex flex-col">
                    Get Your Gear Faster
                    <a className="text-sm underline" href="">
                        Look for Store Pickup at Checkout
                    </a>
                </div>

                <div className="flex flex-col">
                    <p>Members: Free Shipping on Orders $50+</p>
                    <a className="text-sm underline" href="">
                        {' '}
                        Sign Up
                    </a>
                </div>

                <div className="flex flex-col">
                    <p>Extra 25% Off Select Styles</p>
                    <a className="text-sm underline" href="">
                        Sign in & use code MEMBER25. Not a Member? Use code
                        GET20.
                    </a>
                </div>
            </Carousel> */}
        </div>
    );
};

export default SalesSlideLine;
