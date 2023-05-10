import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = ({ data: { attributes: p, id } }) => {
    return (
        <Link
            href={`/product/${p.slug}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <Image className="w-full md:w-[500px]"
                width={500}
                height={500}
                src={p.thumbnail.data.attributes.url}
                alt={p.name}
            />
            <div className="p-4 bg-gradient-to-r from-cyan-700 to-cyan-200 hover:from-sky-700 hover:to-pink-100 ... text-black font-bold ">
                <h2 className="text-lg font-medium">{p.name}</h2>
                <div className="flex items-center text-white">
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;{p.price}
                    </p>

                    {p.original_price && (
                        <>
                            <p className="text-base  font-medium line-through">
                                &#8377;{p.original_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-red-700">
                                {getDiscountedPricePercentage(
                                    p.original_price,
                                    p.price
                                )}
                                % off
                            </p>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
