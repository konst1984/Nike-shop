import React from 'react';
import Image from 'next/image';

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
                            <p className="text-center font-semibold">
                                Nike x Meg Thee Stallion
                            </p>
                            <h3 className="text-clamp-hero-title lin text-center font-bold leading-none">
                                HOT GIRL SYSTEMS
                                <br />
                                IS HERE
                            </h3>
                            <p className="my-8 text-center">
                                Meg’s first-ever Nike collection is here—Hot
                                Girl Systems is bringing
                                <br />
                                shorts, bras, onesies, and more to the Hotties.
                            </p>
                            <div>
                                <a
                                    href="https://www.nike.com/w/megan-thee-stallions-looks-14tw8"
                                    target="_self"
                                    tabIndex={0}
                                    aria-label="Shop"
                                    className="flex justify-center rounded-3xl bg-black px-5 py-2.5 font-helvetica font-bold text-white hover:px-7 duration-200 hover:invert-[0.2]"
                                >
                                    Shop
                                </a>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default HeroBanner;
