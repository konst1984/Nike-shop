import Figure from '@/app/components/figure-img';
import React from 'react';

const FeaturedSection = () => {
    return (
        <section className="mx-6">
            <h3 className="mb-6 px-8 text-4xl font-extrabold uppercase lg:px-12">
                Featured
            </h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <Figure
                    slideContent={{
                        title: 'say it with your crest',
                        imagePath: '/assets/images/featured/image_1.jpg',
                        imagePathSmall:
                            '/assets/images/featured/image_1_sm.jpg',
                        relative: true,
                    }}
                    relative={true}
                    className="max-h-[680px]"
                />
                <Figure
                    slideContent={{
                        title: 'ait force 1 wild',
                        imagePath: '/assets/images/featured/image_2.jpg',
                        imagePathSmall:
                            '/assets/images/featured/image_2_sm.jpg',
                        relative: true,
                    }}
                    className="max-h-[680px]"
                    styleImage="object-top md:object-right"
                />
            </div>
        </section>
    );
};

export default FeaturedSection;
