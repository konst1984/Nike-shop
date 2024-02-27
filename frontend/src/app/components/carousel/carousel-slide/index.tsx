import React, { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

interface ICarouselSlide {
    slideContent: { text: string; imagePath: string };
    index: number;
}
const CarouselSlide: FC<ICarouselSlide> = ({ slideContent, index }) => {
    return (
        <SwiperSlide
            key={index}
            virtualIndex={index}
            style={{
                aspectRatio: '1/1',
                maxWidth: '600px',
                width: 'auto',
                marginRight: '15px',
            }}
        >
            <figure className="h-full w-full">
                <Image
                    width={300}
                    height={300}
                    alt=""
                    src={slideContent.imagePath}
                    className="h-[90%] max-h-[600px] w-full object-cover"
                    sizes="(max-width: 360px) 100vw,(max-width: 959px) 75vw,33vw"
                />
                <figcaption className="pt-4">
                    <h4 className="text-xl capitalize">{slideContent.text}</h4>
                </figcaption>
            </figure>
        </SwiperSlide>
    );
};

export default CarouselSlide;
