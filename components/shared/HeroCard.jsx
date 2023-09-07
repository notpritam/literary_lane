import Image from "next/image";

export default function HeroCard(props) {
  const { image, text } = props;
  return (
    <div className="h-full w-full overflow-hidden border-r-[1px] border-b-[1px] border-t-[1px] border-borderColor relative cursor-pointer">
      <div className="relative">
        <Image
          src={image}
          className="w-full hover:scale-105 duration-150 transition-all ease-in-out h-full object-cover"
          height={1000}
          width={1000}
        />

        <span className="absolute  text-white uppercase  bottom-2 text-[18px] right-4">
          {text}
        </span>
      </div>
    </div>
  );
}
