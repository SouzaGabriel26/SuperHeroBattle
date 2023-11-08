import StyleIcon from '@mui/icons-material/Style';
import { Avatar, Box, IconButton, Typography } from '@mui/material';

export function Profile() {
  return (
    <Box className="bg-slate-800 h-full text-white flex flex-col items-center py-4 gap-6">
      <Box className="flex flex-col items-center gap-2">
        <Avatar title="GS" />
        <Typography variant="body2" className="text-center">
          Gabriel Souza
        </Typography>
      </Box>

      <IconButton>
        <StyleIcon titleAccess="Cards" className="text-white mr-2" />
        <Typography className="hidden text-white sm:block">Cards</Typography>
      </IconButton>
    </Box>
  );
}
