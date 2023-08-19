export default function Sidebar() {
  const category = [
    {
      title: "All Books",
      link: "/",
    },
    {
      title: "Counter-Print Titles",
      link: "/",
    },
    {
      title: "Sample Sale",
      link: "/",
    },
    {
      title: "Magazines",
      link: "/",
    },
    {
      title: "Sationery",
      link: "/",
    },
  ];
  return (
    <div className="w-[90vw] z-[999] fixed top-0 bg-white h-screen text-black overflow-y-scroll">
      <div className="w-full flex p-2 pl-4 pr-4 justify-between text-[1.25rem] items-center  border-b-[1px] border-borderColor min-h-[50px]">
        <span></span>
        <span className="font-thin text-[14px]">X</span>
      </div>

      {category.map((item, index) => (
        <div
          key={index}
          className="w-full flex p-2 pl-4 pr-4 justify-between text-[1.25rem]  border-b-[1px] border-borderColor min-h-[50px]"
        >
          <span>{item.title}</span>
          <span>+</span>
        </div>
      ))}
    </div>
  );
}
