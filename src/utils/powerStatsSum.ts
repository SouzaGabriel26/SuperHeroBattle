import Superhero from "../interfaces/HeroInterface";

export function powerStatsSum(hero: Superhero) {
  return Object.values(hero.powerstats).reduce(
    (acc, curr) => acc + curr,
    0,
  );
}
