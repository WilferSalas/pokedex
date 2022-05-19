// @package
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { FC } from 'react';

// @scripts
import EmptyPage from '../components/empty-page';
import PokemonCard from '../components/pokemon-card';
import { getFavorites } from '../utils';
import { useFetchPokemonsByNames } from '../api';

const FavoritesPage: FC = () => {
  const { data } = useFetchPokemonsByNames(getFavorites());

  if (!data) return <EmptyPage />;

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 3 }}>
        <Grid container spacing={2}>
          {data?.map(({ data: { id, name, sprites } }) => (
            <Grid item xs={6} sm={4} md={3} key={id}>
              <PokemonCard id={id} image={sprites.other?.dream_world.front_default || ''} name={name} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FavoritesPage;
