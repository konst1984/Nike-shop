interface ICheckboxData {
    title: string;
    options: string[];
}

interface IColor {
    title: string;
    options: string[][];
}

interface ISize {
    title: string;
    options: string[];
}

export const GENDER: ICheckboxData = {
    title: 'Gender',
    options: ['Men', 'Women', 'Unisex'],
};

export const PRICE: ICheckboxData = {
    title: 'Shop by Price',
    options: ['$25-$50', '$50 - $100', '$100 - $150', 'Over $150'],
};

export const COLOR: IColor = {
    title: 'Color',
    options: [
        ['black', 'red', 'blue'],
        ['orange', 'Brown', 'green'],
        ['green', 'yellow', 'gray'],
        ['white'],
    ],
};

export const SIZE: ISize = {
    title: 'Size',
    options: [
        '3.5',
        '4',
        '4.5',
        '5',
        '5.5',
        '6',
        '6.5',
        '7',
        '7.5',
        '8',
        '8.5',
        '9',
        '9.5',
        '10',
        '10.5',
        '11',
        '11.5',
        '12',
        '12.5',
        '13',
        '13.5',
        '14',
        '14.5',
        '15',
        '15.5',
        '16',
        '16.5',
    ],
};
