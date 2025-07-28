import React from 'react';
import { Typography, Box } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Bem-vindo ao VaultTrack
      </Typography>
      <Typography variant="body1">
        Esta aplicação ajuda a controlar suas finanças e investimentos de forma simples e organizada.
      </Typography>
    </Box>
  );
};

export default Home;
