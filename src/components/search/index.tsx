// @packages
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEventHandler, FC, FormEvent } from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onClean: () => void;
  onSubmit: () => void;
  value: string;
}

const Search: FC<Props> = ({
  onChange,
  onClean,
  onSubmit,
  value,
}) => {
  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Paper
      component="form"
      elevation={3}
      onSubmit={handleOnSubmit}
      sx={{
        alignItems: 'center',
        display: 'flex',
        p: '2px 4px',
        width: 500,
      }}
    >
      <InputBase
        onChange={onChange}
        placeholder="Search Pokémon..."
        sx={{ ml: 1, flex: 1 }}
        value={value}
      />
      {value.length > 0 && (
        <IconButton onClick={onClean} sx={{ p: '10px' }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      )}
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="submit" onClick={onSubmit} sx={{ p: '10px' }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
