import { Box, Typography } from '@mui/material';
import { Input } from '../../components/Input';
import { useModalContext } from '../../hooks/useModalContext';
import { BattlePreview } from './components/BattlePreview';
import { Heroes } from './components/Heroes';
import { Profile } from './components/Profile';
import { BattleModal } from './modals/BattleModal';
import { useDashboardController } from './useDashboardController';

export function Dashboard() {
  const { onInputHeroChange } = useDashboardController();
  const { isBattlePreviewModalOpen, setIsBattlePreviewModalOpen } =
    useModalContext();

  return (
    <Box className="h-screen w-full relative">
      <BattleModal
        open={isBattlePreviewModalOpen}
        onClose={() => setIsBattlePreviewModalOpen(false)}
      />
      <header className="absolute bg-slate-800 h-16 px-4 w-full flex items-center gap-4 justify-between  md:justify-around">
        <Typography className="!text-xl text-white font-bold">
          SuperHeroes Battle
        </Typography>

        <Input
          name="searchHero"
          placeholder="Buscar super heroi"
          className="h-10 w-40"
          onChange={onInputHeroChange}
        />
      </header>
      <main className="w-full h-full flex">
        <Box className="w-1/6 lg:w-1/6 mt-16">
          <Profile />
        </Box>
        <Box className="w-3/6 lg:w-4/6 overflow-y-auto mt-16 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300">
          <Heroes />
        </Box>
        <Box className="w-2/6 lg:w-1/6 mt-16">
          <BattlePreview />
        </Box>
      </main>
    </Box>
  );
}
