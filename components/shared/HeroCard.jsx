import Image from "next/image";

export default function HeroCard() {
  return (
    <div className="h-full w-full">
      <Image
        src={
          "https://www.counter-print.co.uk/cdn/shop/collections/Books_720x.jpg?v=1691573291"
        }
        layout="fill"
        objectFit="contain"
        alt="Product Image"
      />
    </div>
  );
}
