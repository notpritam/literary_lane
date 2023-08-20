"use client";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

export default function ProductCard(props) {
  const imageRef = useRef();
  const { productItem } = props;
  const imageStyle = {
    border: "1px solid #fff",
    position: "relative",
    width: "100%",
  };
  // const imageStyle2 = {
  //   border: "1px solid #fff",
  //   position: "absolute",
  //   top: "0",
  //   width: "100%",
  //   clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
  // };

  // // const tl = gsap.timeline();
  // const settl = () => {
  //   gsap.to(imageRef?.current, {
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //     duration: 1,
  //   });
  // };

  // const reverse = () => {
  //   gsap.to(imageRef?.current, {
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  //     duration: 1,
  //     ease: "expo.out",
  //   });
  // };

  return (
    <Link href={`/product?product_id=${productItem.id}`}>
      <div className="flex relative flex-col border-b-[1px] border-r-[1px] border-borderColor">
        <div className="h-full w-full z-30 relative">
          <img
            // onMouseEnter={settl}
            // onMouseLeave={reverse}
            alt=""
            style={imageStyle}
            width={300}
            height={300}
            quality={100}
            src={productItem.images[0]}
          ></img>
        </div>
        <div className="flex flex-col p-4 font-light">
          <span className="text-[.8rem] ">{productItem.title}</span>
          <span className="text-[.8rem] tracking-[.05rem]">
            ${productItem.price}
          </span>
        </div>
      </div>
    </Link>
  );
}
