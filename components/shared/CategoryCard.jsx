import Image from "next/image";
import ArrowButton from "./CustomButton";

export default function CategoryCard() {
  return (
    <div className="flex flex-col-reverse   md:flex-row lg:h-[80vh] w-full border-b-[1px] border-borderColor">
      <div className=" w-full gap-4 lg:w-[50%] bg-[#f1ffa7] flex flex-col justify-center p-4 pt-12 pb-8 ">
        <span className="text-[14px] tracking-[.1rem]">SAMPLE SALE</span>
        <span className="text-[2rem] font-light tracking-[.05rem]">
          Books within this section are being offered at a discounted rate as
          they contain a small defect.
        </span>
        <ArrowButton link="/" title="Browse Here"></ArrowButton>
      </div>
      <div className="w-full lg:w-[50%] bg-blue-300">
        <Image
          className="w-full h-full object-cover object-center grayscale-[40%] hover:grayscale-0 duration-200 transition-all ease-in-out"
          src={
            "https://www.counter-print.co.uk/cdn/shop/files/IMG_7565_8f5d58f0-38bd-4200-b271-e8c23ffab02a_1080x.jpg?v=1686651565"
          }
          height={700}
          width={700}
        />
      </div>
    </div>
  );
}
