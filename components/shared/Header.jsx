export default function Header() {
  return (
    <header className="flex justify-between p-2 pt-4 pb-4 bg-backgroundColor text-black items-center border-b-2 border-borderColor">
      <span>Menu</span>
      <span className="uppercase ">LiteraryLane</span>
      <span>{"Cart(0)"}</span>
    </header>
  );
}
