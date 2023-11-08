import { createContext, useCallback, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { api_heroes } from '../config/httpClient';
import Superhero from '../interfaces/HeroInterface';
import { powerStatsSum } from '../utils/powerStatsSum';

interface IDashboardContext {
  championHero: Superhero | null;
  battle: (hero1: Superhero, hero2: Superhero) => void;
  onInputHeroChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  heroFilter: string;
  isLoadingHeroes: boolean;
  filteredHeroes: Superhero[];
  heroesToBattle: Superhero[];
  setHeroesToBattle: React.Dispatch<React.SetStateAction<Superhero[]>>;
  resetChampions: () => void;
}

export const DashboardContext = createContext({} as IDashboardContext);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [championHero, setChampionHero] = useState<Superhero | null>(
    {} as Superhero,
  );
  const [heroFilter, setHeroFilter] = useState('' as string);
  const [heroesToBattle, setHeroesToBattle] = useState<Superhero[]>([]);

  const battle = useCallback((hero1: Superhero, hero2: Superhero) => {
    const powerOfHero1 = powerStatsSum(hero1);
    const powerOfHero2 = powerStatsSum(hero2);

    if (powerOfHero1 > powerOfHero2) {
      setChampionHero(hero1);
    } else if (powerOfHero2 > powerOfHero1) {
      setChampionHero(hero2);
    } else if (powerOfHero1 === powerOfHero2) {
      setChampionHero(null);
    }
  }, []);

  const resetChampions = useCallback(() => {
    setHeroesToBattle([]);
  }, []);

  const onInputHeroChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setHeroFilter(event.target.value);
    },
    [],
  );

  const { data, isLoading: isLoadingHeroes } = useQuery({
    queryKey: 'heroes',
    queryFn: () => api_heroes.get<Superhero[]>('/'),
    staleTime: Infinity,
  });

  const filteredHeroes = useMemo(() => {
    return data?.data.filter((hero) =>
      hero.name.toLowerCase().includes(heroFilter.toLowerCase()),
    ) as Superhero[];
  }, [heroFilter, data]);

  return (
    <DashboardContext.Provider
      value={{
        championHero,
        battle,
        onInputHeroChange,
        heroFilter,
        filteredHeroes,
        isLoadingHeroes,
        heroesToBattle,
        setHeroesToBattle,
        resetChampions,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
