// @packages
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { motion } from 'framer-motion';

// @types
import { Ability, Sprites, Type } from '../../interfaces';

// @scripts
import { getTypeColor } from '../../utils';

// @interfaces
interface Props {
  abilities: Ability[];
  height: number;
  types: Type[];
  weight: number;
  sprites: Sprites;
}

const PokemonCardDetails: FC<Props> = ({
  abilities,
  height,
  sprites,
  types,
  weight,
}) => (
  <>
    <Grid item xs={6}>
      <Typography gutterBottom variant="button" sx={{ textTransform: 'capitalize' }}>
        Height
      </Typography>
      <Typography>
        {height / 10} m
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography gutterBottom variant="button" sx={{ textTransform: 'capitalize' }}>
        Weight
      </Typography>
      <Typography>
        {weight / 10} kg
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography gutterBottom variant="button" sx={{ textTransform: 'capitalize' }}>
        Type
      </Typography>
      <Stack direction="row" spacing={1}>
        {types.map(({ type }) => (
          <Chip
            key={type.name}
            label={<Typography sx={{ textTransform: 'capitalize' }}>{type.name}</Typography>}
            sx={{ color: getTypeColor(type.name) }}
          />
        ))}
      </Stack>
    </Grid>
    <Grid item xs={12}>
      <Typography gutterBottom variant="button" sx={{ textTransform: 'capitalize' }}>
        Abilities
      </Typography>
      <Stack direction="row" spacing={1}>
        {abilities.map(({ ability }) => (
          <Chip
            key={ability.name}
            label={<Typography sx={{ textTransform: 'capitalize' }}>{ability.name}</Typography>}
          />
        ))}
      </Stack>
    </Grid>
    <Grid item xs={12}>
      <Typography gutterBottom variant="button" sx={{ textTransform: 'capitalize' }}>
        Sprites
      </Typography>
      <Stack direction="row" spacing={1}>
        <Box component={motion.div} whileHover={{ scale: 1.5 }}>
          <Image
            alt={sprites.front_default}
            height={150}
            src={sprites.front_default}
            width={150}
          />
        </Box>
        <Box component={motion.div} whileHover={{ scale: 1.5 }}>
          <Image
            alt={sprites.back_default}
            height={150}
            src={sprites.back_default}
            width={150}
          />
        </Box>
        <Box component={motion.div} whileHover={{ scale: 1.5 }}>
          <Image
            alt={sprites.front_shiny}
            height={150}
            src={sprites.front_shiny}
            width={150}
          />
        </Box>
        <Box component={motion.div} whileHover={{ scale: 1.5 }}>
          <Image
            alt={sprites.back_shiny}
            height={150}
            src={sprites.back_shiny}
            width={150}
          />
        </Box>
      </Stack>
    </Grid>
  </>
);

export default PokemonCardDetails;
