import ArrowButton from "./CustomButton";

export default function BlogCard({ id }) {
  return (
    <div className="flex flex-col border-b-[1px] border-r-[1px] border-borderColor pb-8">
      <div className="h-full w-full border-b-[1px] border-borderColor overflow-hidden">
        <img
          className="w-full h-full object-cover object-center max-h-[400px]"
          src="https://www.counter-print.co.uk/cdn/shop/files/01_d6b6a805-1618-41f7-8fe2-c1a20cfe8cfb_540x.jpg?v=1692349963"
        ></img>
      </div>
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
