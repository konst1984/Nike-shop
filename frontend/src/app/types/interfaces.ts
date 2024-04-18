interface ISizes {
	size: number;
	enabled: boolean;
};

export interface IShoes {
	id: string;
  category: string;
	title: string;
	thumbnail: string;
	images: string[];
	color: string[];
	gender: string;
	hight: string;
	price: number;
	sizes: ISizes[];
};

export type IShoesCart = Omit<IShoes, 'sizes' | 'images'> & { quantity: number, size: number };

