import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Container } from '@mui/material';
import { useDashboardContext } from '../../../hooks/useDashboardContext';
import { useModalContext } from '../../../hooks/useModalContext';

export function BattlePreview() {
  const { battle, isLoadingHeroes, heroesToBattle, resetChampions } =
    useDashboardContext();

  const { setIsBattlePreviewModalOpen } = useModalContext();

  return (
    <Box className="h-full bg-slate-800 text-white">
      <Container className="!flex flex-col justify-around gap-2 h-full max-h-full">
        <Box className="flex flex-col items-center gap-4 mb-10">
          <Box className="w-[90%] h-[150px] md:h-[250px]  rounded-xl">
            {heroesToBattle[0] && (
              <img
                className="w-full h-full object-cover rounded-xl animate-slide-down-and-fade border border-gray-300"
                src={heroesToBattle[0]?.images.sm}
                alt={heroesToBattle[0]?.name}
              />
            )}
          </Box>

          {heroesToBattle.length > 0 && (
            <CloseIcon className="!text-6xl animate-pulse transition-all" />
          )}

          <Box className="w-[90%] h-[150px] md:h-[250px] rounded-xl">
            {heroesToBattle[1] && (
              <img
                className="w-full h-full object-cover rounded-xl animate-slide-up-and-fade border border-gray-300"
                src={heroesToBattle[1]?.images.sm}
                alt={heroesToBattle[1]?.name}
              />
            )}
          </Box>

          <div className="flex items-center justify-center flex-col gap-2">
            <Button
              variant="contained"
              disabled={isLoadingHeroes || heroesToBattle.length !== 2}
              onClick={() => {
                battle(heroesToBattle[0], heroesToBattle[1]);
                setIsBattlePreviewModalOpen(true);
              }}
            >
              Batalhar
            </Button>

            <Button
              variant="outlined"
              color="error"
              disabled={isLoadingHeroes || heroesToBattle.length !== 2}
              onClick={resetChampions}
            >
              Resetar batalha
            </Button>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
