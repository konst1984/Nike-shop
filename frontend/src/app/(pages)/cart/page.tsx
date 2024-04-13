import Accordion from '@/app/ui/Accordion/Accordion';
import SaleLine from './components/sale-line';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from '@/app/components/carousel';
import CartItem from './components/cart-Item';
import { CartImages } from './data';

const Cart = () => {
    return (
        <div className="container mb-2">
            <section className="grid grid-cols-1 bg-white py-10 m960:grid-cols-[1fr_auto]">
                <div className="px-2">
                    <SaleLine />
                    <h2 className="text-2xl font-bold">Bag</h2>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className=" px-2 m960:max-w-[350px]">
                    <h2 className="text-2xl font-bold">Summary</h2>
                    <div className="font-medium">
                        <Accordion
                            title="Do you have a Promo Code?"
                            titleClassName="font-bold"
                        >
                            <div className="flex justify-between gap-2">
                                <label className="w-full">
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border border-black/80 p-2"
                                        placeholder="Enter your code here"
                                    />
                                </label>
                                <button
                                    type="button"
                                    className="rounded-[20px] border border-black px-6 py-2"
                                >
                                    Apply
                                </button>
                            </div>
                        </Accordion>
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>$930.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Estimated Shipping & Handling</span>
                            <span>$8.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Estimated Tax</span>
                            <span>-</span>
                        </div>
                        <hr />
                        <div className="flex justify-between py-4">
                            <span>Total</span>
                            <span>$938.00</span>
                        </div>
                        <hr />
                        <div className="grid pb-3 pt-2">
                            <span>
                                You qualify for Free Shipping as a Member!
                            </span>
                            <Link href={'/sign-in'}>Sign in</Link>
                            <div className="flex items-center justify-between gap-2 py-4">
                                <p className="h-2 w-full rounded-2xl bg-green-800" />
                                <span>$50.00</span>
                            </div>
                        </div>
                        <div className="border-t-1 fixed bottom-0 left-0 right-0 z-[2] grid gap-2 border-gray-300 bg-white p-4 m960:static m960:border-none m960:p-0">
                            <button
                                type="button"
                                className="max-h-[60px] w-full items-center justify-center rounded-[50px] border bg-black px-6 py-[18px] text-white hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black"
                            >
                                Checkout
                            </button>
                            <button
                                type="button"
                                title="PayPal"
                                className="hidden max-h-[60px] w-full items-center justify-center rounded-[50px] border bg-gray-300 px-6 py-[18px] hover:bg-white focus-visible:bg-white m960:flex"
                            >
                                <Image
                                    src="/paypal.svg"
                                    width={0}
                                    height={0}
                                    alt="PayPal"
                                    className="h-[60px] w-full"
                                />
                            </button>
                        </div>
                    </div>
                </div>
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
