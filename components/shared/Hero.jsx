import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <HeroCard />
      <HeroCard />
    </div>
  );
}
