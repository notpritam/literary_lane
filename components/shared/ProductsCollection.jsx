import ArrowButton from "./CustomButton";
import ProductCard from "./Product";

export default function ProductCollection() {
  return (
    <div className="mt-4">
      <div className="flex justify-between p-4">
        <span>ALL BOOKS</span>
        <div>
          <ArrowButton link="/" title="View All" />
        </div>
      </div>

      <div className="grid  border-[1px] border-b-0 border-r-0 border-borderColor grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard imageIndex="1" />
        <ProductCard imageIndex="2" />
        <ProductCard imageIndex="3" />
        <ProductCard imageIndex="4" />
        <ProductCard imageIndex="5" />
        <ProductCard imageIndex="6" />
        <ProductCard imageIndex="7" />
        <ProductCard imageIndex="8" />
        <ProductCard imageIndex="9" />
        <ProductCard imageIndex="10" />
        <ProductCard imageIndex="11" />
        <ProductCard imageIndex="12" />
      </div>
    </div>
  );
}
