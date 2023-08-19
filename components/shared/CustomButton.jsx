import Link from "next/link";

export default function ArrowButton(props) {
  const { title, link } = props;
  return (
    <Link
      href={link}
      className="border-b-[1px] border-borderColor pb-[1px] w-max hover:text-hoverColor duration-300 ease-in-out hover:border-hoverColor"
    >
      <div className=" border-borderColor">
        <span className="font-light text-[14px] tracking-[.05rem]">
          {title} →
        </span>
      </div>
    </Link>
  );
}
