// @packages
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

// @interfaces
import { Pokemon } from '../../interfaces';

// @scripts
import { getFormatedNumber } from '../../utils';

interface Props extends Pokemon {
  id: number;
  image: string;
}

const PokemonCard: FC<Props> = ({ id, image, name }) => {
  const { push } = useRouter();

  const handleOnRedirect = () => {
    push(`/pokemon/${name}`);
  };

  const formatedNumber = getFormatedNumber(id);

  return (
    <Card
      component={motion.div}
      onClick={() => handleOnRedirect()}
      sx={{ cursor: 'pointer' }}
      whileHover={{ scale: 1.06 }}
    >
      <CardHeader
        subheader={(
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            {formatedNumber}
          </Typography>
        )}
        title={<Typography sx={{ textTransform: 'capitalize' }}>{name}</Typography>}
      />
      <Box sx={{ textAlign: 'center' }}>
        <Image
          alt={name}
          height={200}
          src={image}
          width={200}
        />
      </Box>
    </Card>
  );
};

export default PokemonCard;
