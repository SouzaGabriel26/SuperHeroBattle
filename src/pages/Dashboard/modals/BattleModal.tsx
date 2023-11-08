import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import { useDashboardContext } from '../../../hooks/useDashboardContext';
import { useModalContext } from '../../../hooks/useModalContext';
import { powerStatsSum } from '../../../utils/powerStatsSum';

interface IBattleModal {
  open: boolean;
  onClose: () => void;
}

export function BattleModal({ open, onClose }: IBattleModal) {
  const { championHero, heroesToBattle } = useDashboardContext();
  const { setIsBattlePreviewModalOpen } = useModalContext();

  return (
    <Modal
      open={open}
      onClose={onClose}
      className="flex items-center justify-center h-screen"
    >
      <Box className="bg-white w-[90%] h-[400px] max-w-[1000px] p-4 rounded-lg animate-slide-up-and-fade">
        <Box className="flex items-center justify-between">
          {!championHero && (
            <Typography variant="h4" className=" text-slate-800">
              Empate!
            </Typography>
          )}
          {championHero && (
            <Typography variant="h4" className="text-green-500">
              <strong className="text-slate-800 ml-4">
                {championHero.name}
              </strong>{' '}
              venceu!
            </Typography>
          )}

          <IconButton onClick={() => setIsBattlePreviewModalOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box className="flex flex-col items-center justify-center h-full">
          {heroesToBattle.map((hero) => (
            <Box
              key={hero.id}
              className="w-full flex items-center justify-between p-2 mt-4 bg-slate-50 rounded-lg"
            >
              <img src={hero.images.xs} alt={hero.name} className="" />
              <Typography variant="h5" className="text-slate-800">
                {hero.name}
              </Typography>
              <Typography variant="h5" className="text-slate-800">
                {powerStatsSum(hero)}
              </Typography>
              {/* listar cada um dos powerstats */}
              <ul className="hidden items-center justify-between gap-4 lg:flex">
                <li>
                  <Typography
                    variant="body1"
                    className="text-slate-800 text-center"
                  >
                    Inteligência
                    <br />
                    {hero.powerstats.intelligence}
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    className="text-slate-800 text-center"
                  >
                    Combate
                    <br />
                    {hero.powerstats.combat}
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    className="text-slate-800 text-center"
                  >
                    Durabilidade
                    <br />
                    {hero.powerstats.durability}
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    className="text-slate-800 text-center"
                  >
                    Poder
                    <br />
                    {hero.powerstats.power}
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    className="text-slate-800 text-center"
                  >
                    Velocidade
                    <br />
                    {hero.powerstats.speed}
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    className="text-slate-800 text-center"
                  >
                    Força
                    <br />
                    {hero.powerstats.strength}
                  </Typography>
                </li>
              </ul>
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
}
