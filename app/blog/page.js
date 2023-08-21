export default function Page(props) {
  const { searchParams } = props;

  const { blog_id } = searchParams;

  console.log(blog_id);
  var imageLink = "";

  if (blog_id == 1) {
    imageLink =
      "https://www.counter-print.co.uk/cdn/shop/articles/COUNTERPRINT-2305-0158-COMP_900x.jpg?v=1689237292";
  } else if (blog_id == 2) {
    imageLink =
      "https://www.counter-print.co.uk/cdn/shop/articles/COUNTERPRINT-2305-0233_900x.jpg?v=1688568280";
  } else {
    imageLink =
      "https://www.counter-print.co.uk/cdn/shop/articles/COUNTERPRINT-2305-0105_copy_900x.jpg?v=1687338736";
  }

  return (
    <div className="mt-[60px] flex flex-col p-12 gap-2">
      <span>OPTICS</span>
      <span>July 13 , 2020</span>
      <div className="w-full max-h-[600px] overflow-hidden mt-4 mb-4 border-[1px] border-borderColor">
        <img
          className="w-full h-full  object-contain hover:scale-105 duration-200 transition-all ease-in-out object-center"
          src={imageLink}
        ></img>
      </div>
      <span>
        We're thrilled to announce the launch of our latest book, 'Optic', which
        explores the use of optical effects in graphic design. Some art forms
        have had more of an impact on the language of graphic design than
        others, but not many have helped contribute the same dynamism, energy
        and vitality as Op Art. Graphic designers today are rediscovering the
        optical art of the 1960s with delight, revelling in its experimentation
        and unexpected outcomes.
      </span>
      <span>
        {" "}
        It is the purpose of ‘Optic’ to attempt a survey of optical effects in
        graphic design and to help distinguish their various forms. As such, the
        book is split into sections such as: Periodic Structures, Interrupted
        Systems, Relief, Impossible Objects, Diffusion, Illusory Contours,
        Figure-ground, Proximity and Isometric Illusion.
      </span>
      <span>
        As well as stunning work on show by a host of talented designers, the
        book features interviews with the likes of Abby Haddican, Daughter,
        Toko, Classmate, Mainstudio, Manifiesto, Study LLC., Burrow and Parker
        Studio about their careers and use of optical illusions in their graphic
        design work. The book has three covers, containing different optical
        illusions, to pick from.
      </span>
    </div>
  );
}
