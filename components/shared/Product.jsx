"use client";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

export default function ProductCard(props) {
  const imageRef = useRef();
  const { imageIndex } = props;
  const imageStyle = {
    border: "1px solid #fff",
    position: "relative",
    width: "100%",
  };
  const imageStyle2 = {
    border: "1px solid #fff",
    position: "absolute",
    top: "0",
    width: "100%",
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
  };

  // const tl = gsap.timeline();
  const settl = () => {
    gsap.to(imageRef?.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
    });
  };

  const reverse = () => {
    gsap.to(imageRef?.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      ease: "expo.out",
    });
  };

  useLayoutEffect(() => {
    // settl();
  });

  return (
    <Link href="/product?product_id=123456">
      <div className="flex relative flex-col border-b-[1px] border-r-[1px] border-borderColor">
        <div className="h-full w-full z-30 relative">
          <img
            onMouseEnter={settl}
            onMouseLeave={reverse}
            alt=""
            style={imageStyle}
            width={300}
            height={300}
            quality={100}
            src="https://www.counter-print.co.uk/cdn/shop/files/01_d6b6a805-1618-41f7-8fe2-c1a20cfe8cfb_540x.jpg?v=1692349963"
          ></img>
          <img
            ref={imageRef}
            className={imageIndex}
            alt=""
            style={imageStyle2}
            width={300}
            height={300}
            quality={100}
            src="https://www.counter-print.co.uk/cdn/shop/files/02_916ceb19-bb9f-46ac-b3c2-52f052ee05f5_720x.png"
          ></img>
        </div>
        <div className="flex flex-col p-4 font-light">
          <span className="text-[.8rem] ">How to design a Logo</span>
          <span className="text-[.8rem] tracking-[.05rem]">$20.00</span>
        </div>
      </div>
    </Link>
  );
}
