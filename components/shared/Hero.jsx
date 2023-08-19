import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <HeroCard image="https://www.counter-print.co.uk/cdn/shop/collections/Books_720x.jpg?v=1691573291" />
      <HeroCard image="https://www.counter-print.co.uk/cdn/shop/collections/CP-Titles_69ee6369-4bf8-4030-86e0-793b5b92c4cb_720x.png?v=1689235843" />
    </div>
  );
}
