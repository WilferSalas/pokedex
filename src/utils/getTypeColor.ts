// @packages
import {
  blue,
  brown,
  deepPurple,
  green,
  lightBlue,
  purple,
  red,
  yellow,
  pink,
  grey,
} from '@mui/material/colors';

// @interfaces
interface Type {
  [key: string]: string
}

export const getTypeColor = (type: string) => {
  const types: Type = {
    normal: '',
    fire: red[300],
    water: blue[300],
    grass: green[300],
    electric: yellow[300],
    ice: lightBlue[400],
    fighting: red[900],
    poison: deepPurple[300],
    ground: brown[300],
    flying: purple[300],
    psychic: pink[300],
    bug: green[300],
    rock: grey[500],
    ghost: grey[200],
    dark: grey[400],
    dragon: blue[400],
    steel: grey[300],
    fairy: pink[500],
  };

  return types[type];
};

export default getTypeColor;
