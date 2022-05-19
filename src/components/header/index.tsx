// @scriptsW
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

// @scripts
import Link from '../link';

// @Constants
const menuOptions = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Favorites', href: '/favorites' },
];

const Header: FC = () => {
  const { asPath, prefetch, push } = useRouter();

  useEffect(() => {
    prefetch('/');
  }, []);

  const handleOnRedirect = () => {
    push('/');
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          onClick={handleOnRedirect}
          sx={{ alignItems: 'center', cursor: 'pointer', display: 'flex' }}
        >
          <CatchingPokemonIcon />
          <Typography sx={{ paddingLeft: 1 }}>Pokédex</Typography>
        </Box>
        <Box>
          {menuOptions.map(({ id, title, href }) => (
            <Link
              color="inherit"
              href={href}
              key={id}
              sx={{
                marginLeft: 1,
                textDecoration: asPath === href ? 'underline' : 'none',
              }}
            >
              {title}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
