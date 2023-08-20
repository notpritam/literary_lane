import BlogCard from "./BlogCard";
import ArrowButton from "./CustomButton";
import ProductCard from "./Product";

export default function BlogCollection() {
  return (
    <div className="mt-4">
      <div className="flex justify-between p-4">
        <span className="uppercase tracking-[.05rem]">Blogs</span>
        <div>
          <ArrowButton link="/" title="View All" />
        </div>
      </div>

      <div className="flex md:flex-row  border-[1px] border-b-0 border-r-0 border-borderColor  flex-col">
        <BlogCard
          id="1"
          image="https://www.counter-print.co.uk/cdn/shop/articles/COUNTERPRINT-2305-0158-COMP_900x.jpg?v=1689237292"
        />
        <BlogCard
          id="2"
          image="https://www.counter-print.co.uk/cdn/shop/articles/COUNTERPRINT-2305-0233_900x.jpg?v=1688568280"
        />
        <BlogCard
          id="3"
          image="https://www.counter-print.co.uk/cdn/shop/articles/COUNTERPRINT-2305-0105_copy_900x.jpg?v=1687338736"
        />
      </div>
    </div>
  );
}
