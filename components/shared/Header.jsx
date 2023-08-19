export default function Header() {
  return (
    <header className="flex justify-between p-2 pt-4 pb-4 bg-backgroundColor text-black items-center border-b-[1.5px] shadow border-borderColor">
      <span className="font-light text-[.9rem] tracking-[.1rem]">Menu</span>
      <span className="uppercase font-normal tracking-[.15rem]">
        LiteraryLane
      </span>
      <span className="text-[.9rem] font-light tracking-[.1rem]">
        {"Cart(0)"}
      </span>
    </header>
  );
}
