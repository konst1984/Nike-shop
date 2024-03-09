import React, { FC } from 'react';
import Image from 'next/image';
import LinkShop from '@/app/ui/LinkShop';
import { CURRENT } from '@/app/constants';
import { ISliderFigure } from '@/app/(pages)/home/components/main/data';

interface IFigure {
    slideContent: ISliderFigure;
    className?: string;
    relative?: boolean;
}
const Figure: FC<IFigure> = ({
    slideContent,
    className = 'max-h-[600px] aspect-square',
}) => {
    return (
        <figure
            className={`${slideContent.relative && 'relative'} h-full w-full ${className}`}
        >
            <picture>
                {slideContent.imagePathSmall && (
                    <source
                        srcSet={slideContent.imagePathSmall}
                        media="(max-width: 767px)"
                    />
                )}
                <Image
                    width={300}
                    height={300}
                    alt=""
                    src={slideContent.imagePath}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 360px) 100vw,(max-width: 959px) 75vw,75vw"
                />
            </picture>
            <figcaption
                className={` ${slideContent.relative ? 'absolute bottom-[10%] left-6 flex flex-col gap-2' : 'pt-4'}`}
            >
                {slideContent.subtitle && (
                    <p className={`$ text-lg text-white`}>
                        {slideContent.subtitle}
                    </p>
                )}
                <h4
                    className={`capitalize ${slideContent.relative ? 'text-2xl text-white drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]' : 'text-xl'}`}
                >
                    {slideContent.title}
                </h4>
                {slideContent.category && <p>{slideContent.category}</p>}
                {slideContent.price && (
                    <p>
                        {CURRENT}
                        {slideContent.price}
                    </p>
                )}
                {slideContent.relative && (
                    <div>
                        <LinkShop
                            path="/w/jordan"
                            className="bg-white text-black"
                            title={slideContent.titleButton || 'Shop'}
                        />
                    </div>
                )}
            </figcaption>
        </figure>
    );
};

export default Figure;
