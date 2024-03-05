import React from 'react';
import Image from 'next/image';
import LinkShop from '@/app/ui/LinkShop';

const HeroBanner = () => {
    return (
        <div className="h-auto">
            <div className="h-full">
                <figure className="relative">
                    <Image
                        src="/hero-banner.jpg"
                        width={1920}
                        height={400}
                        alt="Nike. Just Do It"
                        className="aspect-[16/5] w-full object-cover object-center"
                        priority={true}
                    />
                    <figcaption>
                        <div className="flex-c-c mt-12 flex-col">
                            <h3 className="lin text-center text-clamp-hero-title font-bold uppercase leading-none">
                                Jordan
                                <br />
                                everyday <br className="md:hidden" />
                                staples
                            </h3>
                            <p className="my-8 text-center">
                                Style and legacy come together in the latest
                                collection.
                            </p>
                            <div>
                                <LinkShop path="/w/jordan" />
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default HeroBanner;
