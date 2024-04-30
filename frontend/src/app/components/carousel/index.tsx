'use client';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, A11y } from 'swiper/modules';

import { MdArrowForwardIos } from 'react-icons/md';
import ButtonCircle from '@/app/ui/Buttons/ButtonCircle';
import Figure from '../figure-img';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';

interface ICarousel {
    title?: string;
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
    paddingBottom = '40px',
    slideStyle = {
        maxWidth: '600px',
        width: 'auto',
        marginRight: '15px',
    },
    classFigure,
}) => {
    return (
        <section className="relative mt-12">
            <div className="mb-3 flex items-center px-0 lg:px-8">
                {title && (
                    <h4 className="text-4xl font-extrabold uppercase">
                        {title}
                    </h4>
                )}
                <div className="ml-auto hidden gap-2 lg:flex">
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
                modules={[Keyboard, Scrollbar, Navigation, A11y]}
                style={{ paddingBottom: `${paddingBottom}` }}
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
                className={`swiper-scrollbar swiper-scrollbar-${id}`}
                style={{
                    height: '8px',
                    maxWidth: '100%',
                    backgroundColor: 'transparent',
                }}
            >
                <div
                    style={{
                        backgroundColor: '#555555',
                        minHeight: '100%',
                        borderRadius: '10px',
                    }}
                    className={`swiper-scrollbar-drag swiper-scrollbar-drag-${id}`}
                ></div>
            </div>
        </section>
    );
};

export default Carousel;
