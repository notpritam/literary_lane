import useCart from "@/app/(store)/store";

export default function CartItem() {
  const removeItem = useCart((state) => state.removeItem);

  const removeItemFunction = (itemIndex) => {
    removeItem({ itemIndex });
  };
  return (
    <div className="p-4 flex gap-2 items-center">
      <div>
        <img src="https://cdn.shopify.com/s/files/1/1595/5453/files/01_47171bf2-5b87-4b53-a06d-2483fcc05565_100x.jpg?v=1692352793"></img>
      </div>
      <div className="flex flex-col p-2">
        <span>Aino + Alvar Aalto: A Life Together</span>
        <div className="flex gap-4 text-[1.1rem] items-center">
          <span
            className="cursor-pointer"
            onClick={() => removeItemFunction(1)}
          >
            -
          </span>
          <span>1</span>
          <span>+</span>
        </div>
      </div>

      <div className="flex justify-start items-start h-full">
        <span>$100</span>
      </div>
    </div>
  );
}
