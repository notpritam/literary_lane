import Link from "next/link";
import ArrowButton from "./CustomButton";
import Image from "next/image";

export default function BlogCard({ id, image }) {
  return (
    <div className="flex flex-col border-b-[1px] border-r-[1px] border-borderColor pb-8">
      <Link href={`/blog?blog_id=${id}`}>
        <div className="h-full w-full border-b-[1px] border-borderColor overflow-hidden">
          <Image
            className="w-full h-full pulse object-cover object-center max-h-[400px] transition-all"
            src={image}
            height={300}
            width={300}
          />
        </div>
      </Link>
      <div className="flex flex-col pl-4 pr-4 pt-8 pb-2 gap-2 font-light">
        <span className="text-[.8rem] uppercase ">OPTICS</span>
        <span className="text-[.9rem] tracking-[.05rem]">July 13, 2023</span>
      </div>
      <div className="pr-4 pl-4 flex flex-col gap-3">
        <span>
          We're thrilled to announce the launch of our latest book, 'Optic',
          which explores the use of optical effects in graphic design.Some art
          forms have ...
        </span>
        <ArrowButton link={`/blog?blog_id=${id}`} title="Read more" />
      </div>
    </div>
  );
}
