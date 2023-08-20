"use client";
import ArrowButton from "@/components/shared/CustomButton";
import useCart from "../../lib/store";
import { itemsList } from "@/utils/dummyData";

export default function Page(props) {
  const { searchParams } = props;
  const { product_id } = searchParams;
  const list = itemsList.filter((item) => item.id == product_id);
  const product = list[0];

  const addItemToCart = useCart((state) => state.addItemToCart);

  const addItems = () => {
    addItemToCart({ product: product });
  };

  console.log(product_id);
  return (
    <div className="flex flex-col mt-[60px] md:flex-row items-start relative">
      <div className="w-full h-[30vh] md:h-auto  no-scrollbar flex overflow-scroll flex-nowrap flex-grow md:flex-col md:w-[50%] border-r-[1px] border-borderColor">
        {product.images.map((image) => (
          <div className="border-b-[1px] border-r-[1px] md:border-r-0  border-borderColor">
            <img className="w-full min-w-[200px] h-full" src={image}></img>
          </div>
        ))}
      </div>
      <div className="md:p-12 p-4 md:pt-24 flex flex-col sticky top-0  gap-4 h-screen w-full md:w-[50%]">
        <div className="flex flex-col gap-2  mb-8">
          <span className="text-[1.5rem] tracking-[.1rem]">
            {product.title}
          </span>
          <span className=" tracking-[.1rem]">${product.price}</span>
        </div>

        {/* <div className="flex gap-4 text-[1.1rem] items-center">
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div> */}

        <div
          onClick={() => addItems()}
          className="w-full flex items-center justify-center hover:bg-black hover:border-white   hover:text-white duration-300 transition-all ease-in-out  bg-white cursor-pointer border-borderColor border-[1px] p-3"
        >
          <span className="font-light text-[14px] tracking-[.05rem]">
            Add to cart →
          </span>
        </div>
        <div className="w-full flex items-center justify-center bg-black hover:border-black border-[1px] hover:bg-white hover:text-black duration-200 cursor-pointer text-white p-3">
          <span className="font-light text-[14px] tracking-[.05rem]">
            Buy Now →
          </span>
        </div>

        <span className="font-light tracking-[.05rem] mt-4">{product.des}</span>
      </div>
    </div>
  );
}
