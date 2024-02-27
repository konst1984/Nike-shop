'use client';
import React, { FC, useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, A11y } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

import { MdArrowForwardIos } from 'react-icons/md';
import ButtonCircle from '@/app/ui/ButtonCircle';

interface ICarousel {
    title: string;
    slides: { text: string; imagePath: string }[];
    renderSlider: (slideContent: any, index: any) => React.ReactNode;
}
const Carousel: FC<ICarousel> = ({ title, slides, renderSlider }) => {
    // const slider = useRef<SwiperType>();

    // console.log(slider.current);
    return (
        <div className="relative mt-12">
            <div className="mb-3 flex items-center justify-between px-8 lg:px-12">
                <h2 className="text-2xl capitalize">{title}</h2>
                <div className="flex gap-2">
                    <ButtonCircle className="swiper-btn-prev z-[1000] h-12 w-12 rotate-180 bg-gray-200">
                        <MdArrowForwardIos />
                    </ButtonCircle>
                    <ButtonCircle className="swiper-btn-next z-[1000] h-12 w-12 bg-gray-200">
                        <MdArrowForwardIos />
                    </ButtonCircle>
                </div>
            </div>
            <Swiper
                keyboard={{
                    enabled: true,
                }}
                slidesPerView={2.5}
                navigation={{
                    nextEl: '.swiper-btn-next',
                    prevEl: '.swiper-btn-prev',
                    disabledClass: 'swiper-btn-disabled',
                }}
                spaceBetween={15}
                scrollbar={{
                    el: '.swiper-scrollbar',
                    draggable: true,
                    snapOnRelease: true,
                    dragClass: 'swiper-scrollbar-drag',
                }}
                // onSwiper={(swiper) => {
                //     slider.current = swiper;
                // }}
                modules={[Keyboard, Scrollbar, Navigation, A11y]}
                style={{ padding: '0 24px 30px' }}
            >
                {slides.map(renderSlider)}
            </Swiper>
            <div
                className="swiper-scrollbar z-[1000]"
                style={{ height: '10px', width: '100%' }}
            >
                <div className="swiper-scrollbar-drag"></div>
            </div>
        </div>
    );
};

export default Carousel;
