import Accordion from '@/app/ui/Accordion/Accordion';
import SaleLine from './components/sale-line';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from '@/app/components/carousel';
import { CartImages } from './data';
import CartList from './components/cart-list';
import Summary from './components/summary';

const Cart = () => {
    return (
        <div className="container mb-2">
            <section className="grid grid-cols-1 bg-white py-10 m960:grid-cols-[1fr_auto]">
                <div className="px-2">
                    <SaleLine />
                    <h2 className="text-2xl font-bold">Bag</h2>
                    <CartList />
                </div>
                <Summary />
            </section>
            <h2 className="text-2xl capitalize">You Might Also Like</h2>
            <Carousel
                // title="You Might Also Like"
                id="cart_slider"
                slides={CartImages}
                paddingBottom="15px"
            />
        </div>
    );
};

export default Cart;
