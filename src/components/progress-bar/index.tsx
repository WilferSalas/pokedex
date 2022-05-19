// @packages
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

// @Interfaces
interface Props {
  name: string;
  value: number;
}

const ProgressBar: FC<Props> = ({ name, value }) => (
  <Grid container>
    <Grid item sx={{ textAlign: 'start' }} xs={2}>
      <Typography variant="caption" sx={{ textTransform: 'capitalize' }}>{name}</Typography>
    </Grid>
    <Grid item sx={{ alignSelf: 'center' }} xs={9}>
      <LinearProgress variant="determinate" value={value / 2} />
    </Grid>
    <Grid item xs={1}>
      <Typography variant="caption">{value}</Typography>
    </Grid>
  </Grid>
);

export default ProgressBar;
