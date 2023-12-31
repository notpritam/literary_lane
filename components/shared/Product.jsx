import Image from "next/image";
import Link from "next/link";

export default function ProductCard(props) {
  const { productItem } = props;

  return (
    <Link
      href={`/product?product_id=${productItem.id}`}
      className="overflow-hidden"
    >
      <div className="flex relative flex-col overflow-hidden  border-b-[1px] border-r-[1px] border-borderColor">
        <svg style={{ display: "none" }}>
          <defs>
            <filter id={`filter${productItem.id}`}>
              <feTurbulence
                baseFrequency="0.7,0.8"
                seed="0"
                type="fractalNoise"
                result="static"
              >
                <animate
                  attributeName="seed"
                  values="0;100"
                  dur="800ms"
                  repeatCount="1"
                  begin={`card${productItem.id}.mouseenter`}
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="static">
                <animate
                  attributeName="scale"
                  values="0;40;0"
                  dur="800ms"
                  repeatCount="1"
                  begin={`card${productItem.id}.mouseenter`}
                />
              </feDisplacementMap>
            </filter>
          </defs>
        </svg>
        <div
          className="h-full w-full z-30 relative overflow-hidden "
          id={`card${productItem.id}`}
        >
          <Image
            src={productItem.images[0]}
            className="pulse w-full h-full object-fill"
            height={300}
            width={300}
            style={{ filter: `url(#filter${productItem.id})` }}
          />
        </div>
        <div className="flex flex-col p-4 border-t-[1px] border-borderColor font-light">
          <span className="text-[.8rem] text-ellipsis line-clamp-1 ">
            {productItem.title}
          </span>
          <span className="text-[.8rem] tracking-[.05rem]">
            ${productItem.price}
          </span>
        </div>
      </div>
    </Link>
  );
}
