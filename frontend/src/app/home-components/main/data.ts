import { LinksDataType } from "@/app/components/footer/data";

interface LinksWithTitleDataType {
    title: string;
    links: LinksDataType;
}

export interface ISliderFigure {
        title: string;
        imagePath: string;
        imagePathSmall?: string;
        subtitle?: string;
        price?: number;
        category?: string;
        titleButton?: string;
        relative?: boolean;
}

export const MembershipImages:ISliderFigure[] = [
    {
        title: 'The best of nike',
        imagePath: '/assets/images/sliders/membership/image_1.jpg',
        subtitle: 'Mens Shoes',
        titleButton: 'sign up',
        relative: true,
    },
    {
        title: 'Member product',
        imagePath: '/assets/images/sliders/membership/image_2.jpg',
        subtitle: 'Mens Shoes',
        titleButton: 'shop',
        relative: true,
    },
    {
        title: 'Member rewards',
        imagePath: '/assets/images/sliders/membership/image_3.jpg',
        subtitle: 'Mens Shoes',
        titleButton: 'celebrate',
        relative: true,
    },
    {
        title: 'Sports & Wellness Apps',
        imagePath: '/assets/images/sliders/membership/image_4.jpg',
        subtitle: 'Sports & Wellness Apps',
        titleButton: 'more',
        relative: true,
    },
    {
        title: 'Nike By You',
        imagePath: '/assets/images/sliders/membership/image_5.jpg',
        subtitle: 'Mens Shoes',
        titleButton: 'customize',
        relative: true,
    },
    {
        title: 'SNKRS',
        imagePath: '/assets/images/sliders/membership/image_6.jpg',
        subtitle: 'Mens Shoes',
        titleButton: 'explore',
        relative: true,
    },
    {
        title: 'shop your way',
        imagePath: '/assets/images/sliders/membership/image_7.jpg',
        subtitle: 'member interests',
        titleButton: 'Add interests',
        relative: true,
    },
];

export const PopularImages:ISliderFigure[] = [
    {
        title: 'Nike Dunk Low Retro',
        imagePath: '/assets/images/sliders/popular/image_1.png',
        category: 'Mens Shoes',
        price: 150,
    },
    {
        title: 'Nike Dunk Low Retro',
        imagePath: '/assets/images/sliders/popular/image_1.png',
        category: 'Mens Shoes',
        price: 150,
    },
    {
        title: 'Nike Dunk Low Retro',
        imagePath: '/assets/images/sliders/popular/image_1.png',
        category: 'Mens Shoes',
        price: 150,
    },
    {
        title: 'Nike Dunk Low Retro',
        imagePath: '/assets/images/sliders/popular/image_1.png',
        category: 'Mens Shoes',
        price: 150,
    },
    {
        title: 'Nike Dunk Low Retro',
        imagePath: '/assets/images/sliders/popular/image_1.png',
        category: 'Mens Shoes',
        price: 150,
    },
    {
        title: 'Nike Dunk Low Retro',
        imagePath: '/assets/images/sliders/popular/image_1.png',
        category: 'Mens Shoes',
        price: 150,
    },
    {
        title: 'Nike Dunk Low Retro',
        imagePath: '/assets/images/sliders/popular/image_1.png',
        category: 'Mens Shoes',
        price: 150,
    },
    {
        title: 'Nike Dunk Low Retro',
        imagePath: '/assets/images/sliders/popular/image_1.png',
        category: 'Mens Shoes',
        price: 150,
    },
    {
        title: 'Nike Dunk Low Retro',
        imagePath: '/assets/images/sliders/popular/image_1.png',
        category: 'Mens Shoes',
        price: 150,
    },
];

export const SportsImages:ISliderFigure[] = [
    {
        title: 'basketball',
        imagePath: '/assets/images/sliders/sport/image_1.jpg',
    },
    {
        title: 'running',
        imagePath: '/assets/images/sliders/sport/image_2.jpg',
    },
    {
        title: 'training',
        imagePath: '/assets/images/sliders/sport/image_3.jpg',
    },
    {
        title: 'soccer',
        imagePath: '/assets/images/sliders/sport/image_4.jpg',
    },
    {
        title: 'golf',
        imagePath: '/assets/images/sliders/sport/image_5.jpg',
    },
    {
        title: 'tennis',
        imagePath: '/assets/images/sliders/sport/image_6.jpg',
    },
    {
        title: 'football',
        imagePath: '/assets/images/sliders/sport/image_7.jpg',
    },
    {
        title: 'baseball',
        imagePath: '/assets/images/sliders/sport/image_8.jpg',
    },
    {
        title: 'yoga',
        imagePath: '/assets/images/sliders/sport/image_9.jpg',
    },
];

export const TrendingImages:ISliderFigure[] = [
    {
        title: 'New Arrivals From Jordan',
        imagePath: '/assets/images/sliders/trending/image_1.png',
    },
    {
        title: 'Layer up',
        imagePath: '/assets/images/sliders/trending/image_2.jpg',
    },
    {
        title: 'bloom run collection',
        imagePath: '/assets/images/sliders/trending/image_3.jpg',
    },
    {
        title: 'nike tech',
        imagePath: '/assets/images/sliders/trending/image_4.jpg',
    },
];

export const SALE_INFO_DATA: { title: string; text: string }[] = [
    {
        title: 'Get Your Gear Faster',
        text: 'Look for Store Pickup at Checkout',
    },
    { title: 'Members: Free Shipping on Orders $50+', text: 'Sign Up' },
    {
        title: 'Extra 25% Off Select Styles',
        text: 'Sign in & use code MEMBER25. Not a Member? Use code GET20.',
    },
];

export const LEFT_LINKS: LinksDataType = [
    {title:'air force 1',path: '#'},
    {title:'jordan 1',path: '#'},
    {title:'metcon',path: '#'},
    {title:'air max 270',path: '#'},
    {title:'air max 97',path: '#'},
    {title:'air max 90',path: '#'},
    {title:'blazer',path: '#'},
    {title:'pegasus',path: '#'},
];

export const MIDDLE_LEFT_LINKS: LinksDataType = [
    {title:'all shoes',path: '#'},
    {title:'jordan shoes',path: '#'},
    {title:'runnuns shoes',path: '#'},
    {title:'basketball shoes',path: '#'},
    {title:'tennis shoes',path: '#'},
    {title:'training shoes',path: '#'},
    {title:'sale shoes',path: '#'},
    {title:'soccer cleats',path: '#'},
];

export const MIDDLE_RIGHT_LINKS: LinksDataType = [
    {title:'all clothing',path: '#'},
    {title:'Tops & T-Shirts',path: '#'},
    {title:'Shorts',path: '#'},
    {title:'Hoodies & Pullovers',path: '#'},
    {title:'Joggers & Sweatpants',path: '#'},
    {title:'Sports Bras',path: '#'},
    {title:'Pants & Tights',path: '#'},
    {title:'Socks',path: '#'},
    {title:'Yoga',path: '#'},
    {title:'NikeLab',path: '#'},
    {title:'Plus Size',path: '#'},
    {title:'Big & Tall',path: '#'},
    {title:'Sale Clothing',path: '#'},
];

export const RIGHT_LINKS: LinksDataType = [
    {title:'Infant & Toddler Shoes',path: '#'},
    {title:'Kids Shoes',path: '#'},
    {title:'Kids Basketball Shoes',path: '#'},
    {title:'Kids Running Shoes',path: '#'},
    {title:'Kids Jordan Shoes',path: '#'},
    {title:'Kids Clothing',path: '#'},
    {title:'Kids Backpacks',path: '#'},
    {title:'Kids Socks',path: '#'},
    {title:'Kids Sale',path: '#'},
];