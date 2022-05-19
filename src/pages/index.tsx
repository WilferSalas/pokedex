// @package
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FC, ChangeEvent, useState } from 'react';
import { GetStaticProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';

// @scripts
import PokemonCard from '../components/pokemon-card';
import Search from '../components/search';
import { getPokemons, useFetchPokemons } from '../api';

// @interfaces
import { Pokemon } from '../interfaces';

interface NewPokemonsList extends Pokemon {
  id: number,
  image: string
}

const HomePage: FC = () => {
  const [value, setValue] = useState<string>('');
  const [searchValue, setSearchValue] = useState('');

  const { data } = useFetchPokemons();

  const pokemons: NewPokemonsList[] | undefined = data?.results.map((item, index) => {
    const id = index + 1;
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

    return { ...item, id, image };
  });

  const filteredData = pokemons?.filter((item) => {
    if (searchValue.length < 1) return item;

    return item.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const handleOnOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleOnSubmit = () => {
    setSearchValue(value);
  };

  const handleOnResetSearch = () => {
    setValue('');
    setSearchValue('');
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h5" sx={{ textAlign: 'center', my: 5 }}>
          Pokémon Generation 1
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 5 }}>
          <Search
            onChange={handleOnOnchange}
            onClean={handleOnResetSearch}
            onSubmit={handleOnSubmit}
            value={value}
          />
        </Box>
        <Divider sx={{ marginBottom: 6 }} />
        <Grid container spacing={2}>
          {filteredData?.map(({ id, image, name }) => (
            <Grid item xs={6} sm={4} md={3} key={id}>
              <PokemonCard id={id} image={image} name={name} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('getPokemons', () => getPokemons());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;
