import { Box, CircularProgress, Grid } from '@mui/material';
import { CardHero } from '../../../../components/CardHero';
import { useHeroesController } from './useHeroesController';

export function Heroes() {
  const { isLoadingHeroes, filteredHeroes, handleClickCard, heroesToBattle } =
    useHeroesController();

  return (
    <Box className="p-6 h-full">
      {isLoadingHeroes && (
        <div className="w-full h-full flex items-center justify-center">
          <CircularProgress />
        </div>
      )}

      {!isLoadingHeroes && (
        <Grid container spacing={4}>
          {filteredHeroes?.map((hero) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={hero.id}>
              <CardHero
                hero={hero}
                onClickHero={() => handleClickCard(hero)}
                isSelected={heroesToBattle.includes(hero)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
