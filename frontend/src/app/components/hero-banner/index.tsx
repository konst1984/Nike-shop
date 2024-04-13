import React from 'react';
import Image from 'next/image';
import LinkEllipse from '@/app/ui/LinkEllipse';

const HeroBanner = () => {
    return (
        <div className="h-auto">
            <div className="h-full">
                <figure className="relative">
                    <picture>
                        <source
                            srcSet="/hero-banner-mobile.jpg, /hero-banner-mobile.2x.jpg 2x"
                            media="(max-width:600px)"
                        />
                        <Image
                            src="/hero-banner.jpg"
                            width={1920}
                            height={400}
                            alt="Nike. Just Do It"
                            className="w-full object-cover object-center px-5 pt-2 md:aspect-[16/5] md:px-0 md:pt-0"
                            priority={true}
                        />
                    </picture>
                    <figcaption>
                        <div className="flex-c-c mt-12 flex-col">
                            <p className="font-semibold">Feel The Unreal</p>
                            <h3 className="lin text-center text-clamp-hero-title font-bold uppercase leading-none">
                                Air Max Dn
                            </h3>
                            <p className="my-8 text-center font-semibold">
                                The next generation of Air technology is here.
                            </p>
                            <div>
                                <LinkEllipse path="/w/jordan" />
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default HeroBanner;
