import useCart from "@/lib/store";
import deleteImage from "../../public/assets/delete.png";

export default function CartItem(props) {
  const { product, index } = props;
  const removeItem = useCart((state) => state.removeItem);

  const removeItemFunction = () => {
    removeItem({ itemIndex: index });
  };

  return (
    <div className="p-4 flex gap-2  border-b-[1px] border-borderColor">
      <div className="h-[100px] min-w-[100px]">
        <img className="h-full w-full" src={product.images[0]}></img>
      </div>
      <div className="flex flex-col p-2 gap-2">
        <span>{product.title}</span>
        {/* <div className="flex gap-4 text-[1.1rem] items-center">
          <span className="cursor-pointer" onClick={() => removeItemFunction()}>
            -
          </span>
          <span>1</span>
          <span>+</span>
        </div> */}
        <span>${product.price}</span>
      </div>

      <div
        className="flex justify-center pt-4 cursor-pointer  items-center h-full"
        onClick={() => removeItemFunction()}
      >
        <span className="tracking-[.1rem] font-light">Remove</span>
      </div>
    </div>
  );
}
