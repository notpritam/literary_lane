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
        <BlogCard id="1" />
        <BlogCard id="2" />
        <BlogCard id="3" />
      </div>
    </div>
  );
}
