import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = () => {
  return (
    <Link
      href={`/product/1`}
      className="transform overflow-hidden bg-white cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        src={'/product-1.webp'}
        alt={'Product'}
        className='w-full h-full hover:scale-105 duration-200 '
      />
      <div className = "product-card__info disable-animations for--product">
          <div data-testid = "product-card__messaging" className = "product-card__messaging accent--color">Just In</div>
            <div className = "product-card__title" id = "Air Jordan 1 High OG &quot;Black &amp; White&quot;"
                 role = "link">Air Jordan 1 High OG "Black &amp; White"
            </div>
            <div className = "product-card__subtitle" role = "link">Big Kids' Shoes</div>
              <div aria-label = "Available in 1 Color" className = "product-card__product-count">1 Color</div>
                <div className = "product-price us__styling is--current-price css-11s12ax" data-testid = "product-price"
                     role = "link">$140
                </div>
      </div>
      {/*<div className="p-4 text-black/[0.9]">*/}
      {/*  <h2 className="text-lg font-medium">{p.name}</h2>*/}
      {/*  <div className="flex items-center text-black/[0.5]">*/}
      {/*    <p className="mr-2 text-lg font-semibold">*/}
      {/*      &#8377;{p.price}*/}
      {/*    </p>*/}

      {/*    {p.original_price && (*/}
      {/*      <>*/}
      {/*        <p className="text-base  font-medium line-through">*/}
      {/*          &#8377;{p.original_price}*/}
      {/*        </p>*/}
      {/*        <p className="ml-auto text-base font-medium text-green-500">*/}
      {/*          {getDiscountedPricePercentage(*/}
      {/*            p.original_price,*/}
      {/*            p.price*/}
      {/*          )}*/}
      {/*          % off*/}
      {/*        </p>*/}
      {/*      </>*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </Link>
  );
};

export default ProductCard;
