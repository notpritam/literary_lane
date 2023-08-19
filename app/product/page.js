import ArrowButton from "@/components/shared/CustomButton";

export default function Page() {
  return (
    <div className="md:flex items-start relative">
      <div className="w-[50%] border-r-[1px] border-borderColor">
        <div className="border-b-[1px] border-borderColor">
          <img
            className="w-full"
            src="https://www.counter-print.co.uk/cdn/shop/files/01_48c9bdc0-2e15-4620-8beb-ffd2be9fb95a_900x.jpg?v=1692351529"
          ></img>
        </div>
        <div className="border-b-[1px] border-borderColor">
          <img
            className="w-full"
            src="https://www.counter-print.co.uk/cdn/shop/files/01_48c9bdc0-2e15-4620-8beb-ffd2be9fb95a_900x.jpg?v=1692351529"
          ></img>
        </div>
        <div className="border-b-[1px] border-borderColor">
          <img
            className="w-full"
            src="https://www.counter-print.co.uk/cdn/shop/files/01_48c9bdc0-2e15-4620-8beb-ffd2be9fb95a_900x.jpg?v=1692351529"
          ></img>
        </div>
        <div className="border-b-[1px] border-borderColor">
          <img
            className="w-full"
            src="https://www.counter-print.co.uk/cdn/shop/files/01_48c9bdc0-2e15-4620-8beb-ffd2be9fb95a_900x.jpg?v=1692351529"
          ></img>
        </div>
      </div>
      <div className="p-12 pt-24 flex flex-col sticky top-0  gap-4 h-screen w-[50%]">
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

        <span>
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
