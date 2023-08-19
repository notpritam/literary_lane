"use client";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function Sidebar() {
  const sidebar_ref = useRef();
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

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true, reversed: true });
      tl.to(
        sidebar_ref?.current,

        {
          left: "0%",
          duration: 0.5,
        }
      );
    }, sidebar_ref);

    return () => {
      ctx.revert();
    };
  });

  return (
    <div
      ref={sidebar_ref}
      className="w-[90vw] z-[999] left-[-100%] fixed top-0 bg-white h-screen text-black overflow-y-scroll _active"
    >
      <div className="w-full flex p-2 pl-4 pr-4 justify-between text-[1.25rem] items-center  border-b-[1px] border-borderColor min-h-[50px]">
        <span></span>
        <span className="font-thin text-[14px]">X</span>
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
  );
}
