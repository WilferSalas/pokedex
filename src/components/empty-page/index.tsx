// @package
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

const EmptyPage: FC = () => {
  const { prefetch, push } = useRouter();

  useEffect(() => {
    prefetch('/');
  }, []);

  const handleOnRedirect = () => {
    push('/');
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          alignItems: 'center',
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 100px)',
          justifyContent: 'center',
        }}
      >
        <CatchingPokemonIcon sx={{ fontSize: 100 }} />
        <Typography variant="h6">No Pokémons here</Typography>
        <Button onClick={handleOnRedirect} startIcon={<ArrowBackIcon />}>
          Return Home
        </Button>
      </Box>
    </Container>
  );
};

export default EmptyPage;
