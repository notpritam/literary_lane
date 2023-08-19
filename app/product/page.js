import ArrowButton from "@/components/shared/CustomButton";

export default function Page() {
  return (
    <div className="flex flex-col mt-[60px] md:flex-row items-start relative">
      <div className="w-full h-[30vh] md:h-auto  no-scrollbar flex overflow-scroll flex-nowrap flex-grow md:flex-col md:w-[50%] border-r-[1px] border-borderColor">
        <div className="border-b-[1px] border-r-[1px] md:border-r-0 border-borderColor">
          <img
            className="w-full min-w-[200px] h-full"
            src="https://www.counter-print.co.uk/cdn/shop/files/01_48c9bdc0-2e15-4620-8beb-ffd2be9fb95a_900x.jpg?v=1692351529"
          ></img>
        </div>
        <div className="border-b-[1px] border-r-[1px] md:border-r-0  border-borderColor">
          <img
            className="w-full min-w-[200px] h-full"
            src="https://www.counter-print.co.uk/cdn/shop/files/01_48c9bdc0-2e15-4620-8beb-ffd2be9fb95a_900x.jpg?v=1692351529"
          ></img>
        </div>
        <div className="border-b-[1px] border-r-[1px] md:border-r-0  border-borderColor">
          <img
            className="w-full min-w-[200px] h-full"
            src="https://www.counter-print.co.uk/cdn/shop/files/01_48c9bdc0-2e15-4620-8beb-ffd2be9fb95a_900x.jpg?v=1692351529"
          ></img>
        </div>
        <div className="border-b-[1px]  border-r-[1px] md:border-r-0  border-borderColor">
          <img
            className="w-full min-w-[200px] h-full"
            src="https://www.counter-print.co.uk/cdn/shop/files/01_48c9bdc0-2e15-4620-8beb-ffd2be9fb95a_900x.jpg?v=1692351529"
          ></img>
        </div>
      </div>
      <div className="md:p-12 p-4 md:pt-24 flex flex-col sticky top-0  gap-4 h-screen w-full md:w-[50%]">
        <div className="flex flex-col gap-2">
          <span className="text-[1.5rem] tracking-[.1rem]">
            À peu près Euclide
          </span>
          <span className=" tracking-[.1rem]">$19.00</span>
        </div>
        <div className="flex gap-4 text-[1.1rem] items-center">
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>

        <div className="w-full flex items-center justify-center bg-white cursor-pointer border-borderColor border-[1px] p-3">
          <span className="font-light text-[14px] tracking-[.05rem]">
            Add to cart →
          </span>
        </div>
        <div className="w-full flex items-center justify-center bg-black hover:bg-white hover:text-black duration-200 cursor-pointer text-white p-3">
          <span className="font-light text-[14px] tracking-[.05rem]">
            Buy Now →
          </span>
        </div>

        <span className="font-light tracking-[.05rem] mt-4">
          À peu près Euclide is a graphic and chromatic exploration of the
          language of Oliver Byrne, author of a treatise celebrating the
          marriage of art and science in 1850. Laurent Millet conjures up the
          vocabularies of the avant-gardes of the 20th century or the Memphis
          movement, but also, happily, that of childhood, with photographic
          prints using the gum bichromate process which gives them a graphic
          quality that is difficult to identify.
        </span>
      </div>
    </div>
  );
}
