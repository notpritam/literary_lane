export default function ProductCard() {
  return (
    <div className="flex flex-col border-b-[1px] border-r-[1px] border-borderColor">
      <div className="h-full w-full">
        <img src="https://www.counter-print.co.uk/cdn/shop/files/01_d6b6a805-1618-41f7-8fe2-c1a20cfe8cfb_540x.jpg?v=1692349963"></img>
      </div>
      <div className="flex flex-col p-4 font-light">
        <span className="text-[.8rem] ">How to design a Logo</span>
        <span className="text-[.8rem] tracking-[.05rem]">$20.00</span>
      </div>
    </div>
  );
}
