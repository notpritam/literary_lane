"use client";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import useCart from "@/lib/store";
import dynamic from "next/dynamic";
import CartItem from "./CartItem";

function Header() {
  const sidebar_ref = useRef();
  const cart_ref = useRef();
  const category = [
    {
      title: "All Books",
      link: "/",
    },
    {
      title: "Counter-Print Titles",
      link: "/",
    },
    {
      title: "Sample Sale",
      link: "/",
    },
    {
      title: "Magazines",
      link: "/",
    },
    {
      title: "Sationery",
      link: "/",
    },
  ];

  const tl = gsap.timeline({ paused: true, reversed: true });

  const settl = () => {
    if (sidebar_ref) {
      tl.to(
        sidebar_ref?.current,

        {
          left: "0%",
          duration: 0.5,
        }
      );
    }
  };

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    settl();

    return () => {};
  });

  function playAnimation(style) {
    if (style == "close") {
      gsap.to(
        sidebar_ref?.current,

        {
          left: "-100%",
          duration: 0.5,
        }
      );
    } else {
      gsap.to(
        sidebar_ref?.current,

        {
          left: "0%",
          duration: 0.5,
        }
      );
    }
  }

  function openSidebar(style) {
    if (style == "close") {
      gsap.to(
        cart_ref?.current,

        {
          right: "-100%",
          duration: 0.5,
        }
      );
    } else {
      gsap.to(
        cart_ref?.current,

        {
          right: "0%",
          duration: 0.5,
        }
      );
    }
  }

  const cart = useCart((state) => state?.cart);

  var total = 0;

  console.log(cart);

  return (
    <>
      <header className="flex shadow-md fixed top-0 h-[60px] z-[999] w-full justify-between p-2 pt-4 pb-4 bg-backgroundColor text-black items-center border-b-[1.5px]  border-borderColor">
        <span
          className="font-light text-[.9rem] tracking-[.1rem] cursor-pointer"
          onClick={() => playAnimation("open")}
        >
          Menu
        </span>
        <Link href={"/"}>
          <span className="uppercase font-normal tracking-[.15rem]">
            LiteraryLane
          </span>
        </Link>
        <span
          className="text-[.9rem] font-light tracking-[.1rem] cursor-pointer"
          onClick={() => openSidebar("open")}
        >
          Cart({cart.length})
        </span>
      </header>

      {/* Menu Sidebar */}
      <div
        ref={sidebar_ref}
        className="w-[90vw] no-scrollbar shadow-md max-w-[400px] z-[999] left-[-100%] fixed top-0 bg-white h-screen text-black overflow-y-scroll _active"
      >
        <div className="w-full flex p-2 pl-4 pr-4 justify-between text-[1.25rem] items-center  border-b-[1px] border-borderColor min-h-[50px]">
          <span></span>
          <span
            className="font-thin text-[14px] cursor-pointer w-[20px] flex justify-end items-center"
            onClick={() => playAnimation("close")}
          >
            X
          </span>
        </div>

        {category.map((item, index) => (
          <div
            key={index}
            className="w-full flex p-2 pl-4 pr-4 justify-between text-[1.25rem]  border-b-[1px] border-borderColor min-h-[50px]"
          >
            <span>{item.title}</span>
            <span>+</span>
          </div>
        ))}
      </div>

      <div
        ref={cart_ref}
        className="w-[90vw] no-scrollbar shadow-lg max-w-[400px] z-[999] right-[-100%] fixed top-0 bg-white h-screen text-black overflow-y-scroll _active"
      >
        <div className="w-full flex p-2 pl-4 pr-4 justify-between text-[1.25rem] items-center  border-b-[1px] border-borderColor min-h-[50px]">
          <span className="text-[16px]">Your Cart - (0) Items</span>
          <span
            className="font-thin text-[14px] cursor-pointer w-[20px] flex justify-end items-center"
            onClick={() => openSidebar("close")}
          >
            X
          </span>
        </div>

        {cart.length == 0 ? (
          <div className="p-4">
            <span className="text-[16px]">Your cart is currently empty</span>
          </div>
        ) : (
          <>
            {cart.map((item, index) => (
              <CartItem key={index} product={item} index={index} />
            ))}

            <div className="border-b-[1px] p-4 border-borderColor flex flex-col gap-2">
              <span className="text-[14px] font-light">
                Add a note to your order
              </span>
              <textarea className="border-[1px] w-full h-[120px]" />
            </div>
            <div className="p-4 flex flex-col gap-4">
              <div className="w-full flex justify-between items-center ">
                <span className="text-[18px] tracking-[.1rem]">Subtotal</span>
                <span className="text-[18px] tracking-[.15rem] font-light">
                  $
                  {cart.map((item) => {
                    total += parseInt(item.price);
                  })}
                  {total}
                </span>
              </div>
              <div className="w-full flex items-center justify-center bg-black hover:border-[1px] hover:border-borderColor hover:bg-white hover:text-black duration-200 cursor-pointer text-white p-3">
                <span className="font-light text-[14px] tracking-[.05rem]">
                  Check out →
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(Header), { ssr: false });
