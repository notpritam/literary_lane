export default function HeroCard(props) {
  const { image, text } = props;
  return (
    <div className="h-full w-full overflow-hidden border-r-[1px] border-b-[1px] border-t-[1px] border-borderColor relative cursor-pointer">
      <div className="relative">
        <img
          src={image}
          className="w-full object-cover hover:scale-105 duration-300 transition-all ease-in-out"
        />

        <span className="absolute  text-white uppercase  bottom-2 text-[18px] right-4">
          {text}
        </span>
      </div>
    </div>
  );
}
