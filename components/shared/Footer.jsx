import Link from "next/link";
import ArrowButton from "./CustomButton";
import twitterSvg from "../../public/assets/twitter.svg";

export default function Footer() {
  return (
    <footer className="border-[1px] border-borderColor">
      <div className=" bg-[#f1ffa7] flex flex-col lg:flex-row lg:justify-between p-4 pt-8 pb-8 gap-4">
        <span>
          Subscribe to our newsletter to receive special offers and first look
          at new products.
        </span>
        <div className="flex flex-col lg:flex-row lg:gap-4 gap-2">
          <input
            className="bg-transparent text-black placeholder-black border-b-[1px] border-borderColor pb-[2px]"
            placeholder="Email Address"
          ></input>
          <ArrowButton link="/" title="Subscribe" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row border-[1px] border-borderColor">
        <div className="p-4 w-full pt-8  border-b-[1px]  lg:border-l-[1px] border-borderColor">
          <span className="uppercase">LiteraryLane</span>
        </div>
        <div className="p-4 w-full pt-8  border-b-[1px]  lg:border-l-[1px]  border-borderColor">
          <span className="upppercase tracking-[.05rem]">
            LiteraryLane is an independent publisher and online store
            specialising in design and visual culture. We produce and curate a
            unique selection of books from around the world.
          </span>
        </div>
        <div className="p-4 w-full pt-8 border-b-[1px]   lg:border-b-[0px]  lg:border-l-[1px]  border-borderColor">
          <span className="uppercase">Contact</span>
          <div className="flex flex-col mt-2 ">
            <Link href={"/"}>
              <span className="hover:text-hoverColor">About</span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-hoverColor">Contact</span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-hoverColor">Distribution</span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-hoverColor">Terms & Condtions</span>
            </Link>
          </div>
        </div>
        <div className="p-4 w-full pt-8   lg:border-l-[1px]   border-borderColor">
          <span className="uppercase">Follow Us</span>
          <div>
            <img src="../../public/assets/twitter.svg"></img>
          </div>
        </div>
      </div>
    </footer>
  );
}
