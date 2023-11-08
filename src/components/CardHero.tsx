import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import { Box, Typography } from '@mui/material';
import Superhero from '../interfaces/HeroInterface';
import { cn } from '../utils/cn';
import { isValidColor } from '../utils/colors';
import { powerStatsSum } from '../utils/powerStatsSum';

interface ICardProps {
  hero: Superhero;
  onClickHero?: () => void;
  isSelected?: boolean;
}

export function CardHero({ hero, onClickHero, isSelected }: ICardProps) {
  const power = powerStatsSum(hero);

  const eyeColor = isValidColor(hero.appearance.eyeColor.trim())
    ? hero.appearance.eyeColor
    : '#000';

  // some returns: "No hair"
  const hairColor = isValidColor(hero.appearance.hairColor.trim())
    ? hero.appearance.hairColor
    : '#000';

  const gradientBackground = {
    background: `linear-gradient(to right, ${eyeColor}, ${hairColor})`,
    padding: '16px',
    borderRadius: '8px',
  };

  return (
    <Box
      style={gradientBackground}
      className={cn(
        'h-72 lg:h-fit text-white flex flex-col items-center justify-center gap-2 hover:scale-105 transition-all cursor-pointer',
        isSelected && 'ring-4 ring-green-400 !scale-110',
      )}
      onClick={onClickHero}
    >
      <Typography className="pt-4">{hero.name}</Typography>
      <img src={hero.images.sm} alt={hero.name} className="rounded-lg" />
      <div className="flex items-center pb-4">
        <BoltOutlinedIcon />
        <Typography>{power}</Typography>
      </div>
    </Box>
  );
}
