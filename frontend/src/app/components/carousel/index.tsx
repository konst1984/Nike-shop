'use client';
import React, { FC, useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, A11y } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

import { MdArrowForwardIos } from 'react-icons/md';
import ButtonCircle from '@/app/ui/ButtonCircle';
import Figure from '../figure';

interface ICarousel {
    title: string;
    slides: { title: string; imagePath: string }[];
    id: string;
    paddingBottom?: string;
    slideStyle?: { [key: string]: string };
    classFigure?: string;
}
const Carousel: FC<ICarousel> = ({
    title,
    slides,
    id,
    paddingBottom = '80px',
    slideStyle = {
        aspectRatio: '1/1',
        maxWidth: '600px',
        width: 'auto',
        marginRight: '15px',
    },
    classFigure,
}) => {
    const slider = useRef<SwiperType>();

    // console.log(slider.current);
    return (
        <section className="relative mt-12">
            <div className="mb-3 flex items-center justify-between px-8 lg:px-12">
                <h2 className="text-2xl capitalize">{title}</h2>
                <div className="flex gap-2">
                    <ButtonCircle
                        className={`swiper-btn-prev-${id} flex-c-c z-[100] h-12 w-12 rotate-180 bg-gray-200`}
                    >
                        <MdArrowForwardIos />
                    </ButtonCircle>
                    <ButtonCircle
                        className={`swiper-btn-next-${id} flex-c-c z-[100] h-12 w-12 bg-gray-200`}
                    >
                        <MdArrowForwardIos />
                    </ButtonCircle>
                </div>
            </div>
            <Swiper
                keyboard={{
                    enabled: true,
                }}
                slidesPerView={3.1}
                navigation={{
                    nextEl: `.swiper-btn-next-${id}`,
                    prevEl: `.swiper-btn-prev-${id}`,
                    disabledClass: `swiper-btn-disabled-${id}`,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 1.25,
                    },
                    960: {
                        slidesPerView: 3,
                    },
                }}
                spaceBetween={15}
                scrollbar={{
                    el: `.swiper-scrollbar-${id}`,
                    draggable: true,
                    snapOnRelease: true,
                    dragClass: `swiper-scrollbar-drag-${id}`,
                }}
                onSwiper={(swiper) => {
                    slider.current = swiper;
                }}
                modules={[Keyboard, Scrollbar, Navigation, A11y]}
                style={{ padding: `0 24px ${paddingBottom}` }}
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide
                        key={index}
                        virtualIndex={index}
                        style={slideStyle}
                    >
                        <Figure
                            slideContent={slideContent}
                            className={classFigure}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                className={`swiper-scrollbar swiper-scrollbar-${id} z-[1000]`}
                style={{ height: '10px', maxWidth: '100%' }}
            >
                <div
                    className={`swiper-scrollbar-drag swiper-scrollbar-drag-${id}`}
                ></div>
            </div>
        </section>
    );
};

export default Carousel;
