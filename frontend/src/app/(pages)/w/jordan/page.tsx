import React from 'react';
import ProductsList from "@/app/components/products-list";
import SalesSlideLine from "@/app/components/sale-slide-line";

const SALE_INFO_DATA: {title:string, text: string}[] = [
  { title: 'MEMBERS: FREE SHIPPING ON ORDERS $50+', text: 'Sign Up' },
  { title: 'SAVE UP TO 40%', text: 'Shop All Our New Markdowns' },
  { title: 'Get Your Gear Faster', text: 'Look for Store Pickup at Checkout' },
]


const Page = () => {
  return (
    <div>
      <SalesSlideLine data={SALE_INFO_DATA}/>
      <h1>Jordan</h1>
      <ProductsList/>
    </div>
  );
};

export default Page;
