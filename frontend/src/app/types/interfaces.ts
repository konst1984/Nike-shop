interface ISizes {
	size: number;
	enabled: boolean;
};

export interface IShoe {
	id: string;
  category: string;
	title: string;
	thumbnail: string;
	images: string[];
	color: string;
	gender: string;
	hight: string;
	price: number;
	model: string;
	sizes: ISizes[];
};

export type IShoeCart = Omit<IShoe, 'images'> & { quantity: number, selectedSize: number, totalPrice: number };

