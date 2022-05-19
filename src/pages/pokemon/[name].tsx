// @packages
import Container from '@mui/material/Container';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { FC, useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { useRouter } from 'next/router';

// @scripts
import EmptyPage from '../../components/empty-page';
import PokemonCardDetails from '../../components/pokemon-card-details';
import ProgressBar from '../../components/progress-bar';
import { checkFavorites, getFormatedNumber, toggleFavorite } from '../../utils';
import { getPokemon, getPokemons, useFetchPokemon } from '../../api';

const PokemonPage: FC = () => {
  const { query } = useRouter();
  const { name } = query as { name: string };
  const { data } = useFetchPokemon(name);

  const [isInFoavorites, setIsInFoavorites] = useState<boolean>(checkFavorites(name));

  if (!data) return <EmptyPage />;

  const handleOnSavePokemon = () => {
    toggleFavorite(name);
    setIsInFoavorites((prevState) => !prevState);
  };

  return (
    <Grid container component={Container} maxWidth="lg" sx={{ marginBottom: 2 }}>
      <Grid item xs={12}>
        <Typography align="center" variant="h5" sx={{ my: 5, textTransform: 'capitalize' }}>
          {data.name} {getFormatedNumber(data.id)}
        </Typography>
      </Grid>
      <Grid item sx={{ textAlign: 'center', position: 'relative' }} xs={12} md={6}>
        <IconButton onClick={handleOnSavePokemon} sx={{ position: 'absolute', right: '5%' }}>
          <FavoriteIcon fontSize="large" color={isInFoavorites ? 'error' : 'inherit'} />
        </IconButton>
        <Image
          alt={data.name}
          height={300}
          src={data.sprites.other?.['official-artwork'].front_default || ''}
          width={300}
        />
        {data.stats.map((stat) => (
          <ProgressBar key={stat.stat.name} name={stat.stat.name} value={stat.base_stat} />
        ))}
      </Grid>
      <Grid
        component={Paper}
        container
        elevation={3}
        item
        md={6}
        sx={{ padding: 2 }}
        xs={12}
      >
        <PokemonCardDetails
          abilities={data.abilities}
          height={data.height}
          sprites={data.sprites}
          types={data.types}
          weight={data.weight}
        />
      </Grid>
    </Grid>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemon = await getPokemons();

  return {
    paths: [...pokemon.results.map(({ name }) => ({
      params: { name },
    }))],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();

  const { name } = params as { name: string };

  await queryClient.prefetchQuery('getPokemon', () => getPokemon(name));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default PokemonPage;
