'use client';
import React, { FC, useState } from 'react';
import { Navigation, Thumbs, FreeMode, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ButtonCircle from '@/app/ui/Buttons/ButtonCircle';
import { MdArrowForwardIos } from 'react-icons/md';

const images = [
    '/p1.png',
    '/p2.png',
    '/p3.png',
    '/p4.png',
    '/p5.png',
    '/p6.png',
    '/p7.png',
];

interface IProductDetailsCarousel {
    data: string[];
}

const ProductDetailsCarousel: FC<IProductDetailsCarousel> = ({ data }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex h-full w-full justify-start gap-4 overflow-hidden m960:pl-12">
            <div className="hidden w-full m960:block">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    grabCursor={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
                    direction="vertical"
                    style={{
                        width: '100px',
                        height: '100%',
                        maxHeight: '100%',
                    }}
                    onSlideChange={(swiper) =>
                        setActiveIndex(swiper.activeIndex)
                    }
                >
                    {data.map((src, idx) => (
                        <SwiperSlide
                            key={idx}
                            className="flex max-h-20 w-20 items-center justify-center"
                        >
                            <Image
                                width={80}
                                height={80}
                                src={`/${src}`}
                                alt=""
                                className={`${activeIndex === idx && 'opacity-50'} block h-full w-full rounded-md object-cover`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="position-relative w-full m960:w-[calc(100%-120px)] m960:max-w-[535px]">
                <Swiper
                    id="swiper-product"
                    style={{
                        width: '100%',
                        height: '100%',
                        maxHeight: '100%',
                    }}
                    navigation={{
                        nextEl: `.swiper-btn-next`,
                        prevEl: `.swiper-btn-prev`,
                        disabledClass: `swiper-btn-disabled`,
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: false,
                    }}
                    grabCursor={true}
                    onSlideChange={(swiper) =>
                        setActiveIndex(swiper.activeIndex)
                    }
                    fadeEffect={{ crossFade: true }}
                    className="relative"
                >
                    {data.map((src, idx) => (
                        <SwiperSlide
                            key={idx}
                            style={{
                                height: '100%',
                            }}
                            className="flex items-center justify-center"
                        >
                            <Image
                                width={500}
                                height={500}
                                src={`/${src}`}
                                alt=""
                                className="block h-full w-full rounded-md object-cover"
                            />
                        </SwiperSlide>
                    ))}
                    <ButtonCircle
                        className={`swiper-btn-prev flex-c-c absolute left-4 top-1/2 z-[100] h-12 w-12 -translate-y-1/2 rotate-180 bg-gray-200 m960:bottom-4 m960:left-auto m960:right-[70px] m960:top-auto m960:translate-y-0`}
                    >
                        <MdArrowForwardIos />
                    </ButtonCircle>
                    <ButtonCircle
                        className={`swiper-btn-next flex-c-c absolute right-4 top-1/2 z-[100] h-12 w-12 -translate-y-1/2 bg-gray-200 m960:bottom-4 m960:top-auto m960:translate-y-0`}
                    >
                        <MdArrowForwardIos />
                    </ButtonCircle>
                </Swiper>
            </div>
        </div>
    );
};

export default ProductDetailsCarousel;
