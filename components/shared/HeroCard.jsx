export default function HeroCard(props) {
  const { image } = props;
  return (
    <div className="h-full w-full border border-borderColor relative">
      <div className="relative">
        <img src={image} className="w-full object-cover" />

        <span className="absolute  text-white uppercase  bottom-2 text-[14px] right-4">
          ALL BOOKS
        </span>
      </div>
    </div>
  );
}
