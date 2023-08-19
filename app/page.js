import BlogCollection from "@/components/shared/BlogCollection";
import CategoryCard from "@/components/shared/CategoryCard";
import Hero from "@/components/shared/Hero";
import ProductCollection from "@/components/shared/ProductsCollection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-auto mt-[60px]">
      <Hero />
      <ProductCollection />
      <CategoryCard />
      <BlogCollection />
    </main>
  );
}
