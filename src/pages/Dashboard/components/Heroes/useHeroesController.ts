import { useDashboardContext } from "../../../../hooks/useDashboardContext";
import Superhero from "../../../../interfaces/HeroInterface";

export function useHeroesController() {
  const { isLoadingHeroes, filteredHeroes, battle, heroesToBattle, setHeroesToBattle } = useDashboardContext();

  function handleClickCard(hero: Superhero) {
    if (heroesToBattle.length < 2) {
      setHeroesToBattle((prevState) => prevState.includes(hero)
        ? prevState.filter((heroToFilter) => heroToFilter !== hero)
        : [...prevState, hero]
      );
    } else {
      setHeroesToBattle(prevState => prevState.filter((heroToFilter) => heroToFilter !== hero))
    }
  }

  return {
    isLoadingHeroes,
    filteredHeroes,
    handleClickCard,
    heroesToBattle,
    battle
  }

}
