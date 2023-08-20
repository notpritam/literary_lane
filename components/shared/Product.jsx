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
        <svg style={{ display: "none" }}>
          <defs>
            <filter id={`filter${productItem.id}`}>
              <feTurbulence
                baseFrequency="0.7,0.8"
                seed="0"
                type="fractalNoise"
                result="static"
              >
                <animate
                  attributeName="seed"
                  values="0;100"
                  dur="800ms"
                  repeatCount="1"
                  begin={`card${productItem.id}.mouseenter`}
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="static">
                <animate
                  attributeName="scale"
                  values="0;40;0"
                  dur="800ms"
                  repeatCount="1"
                  begin={`card${productItem.id}.mouseenter`}
                />
              </feDisplacementMap>
            </filter>
          </defs>
        </svg>
        <div
          className="h-full w-full z-30 relative overflow-hidden "
          id={`card${productItem.id}`}
        >
          <img
            alt=""
            quality={100}
            style={{
              filter: `url(#filter${productItem.id})`,
              cursor: "pointer",
            }}
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
