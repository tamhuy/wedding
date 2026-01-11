import { useTranslation } from 'react-i18next';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const current = (i18n.language || 'en').split('-')[0];

  const handleChange = (e: SelectChangeEvent<string>) => {
    void i18n.changeLanguage(e.target.value as string);
  };

  return (
    <FormControl variant="standard" sx={{ minWidth: 96 }}>
      <InputLabel id="language-select-label">Språk</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={current}
        onChange={handleChange}
        label="Språk"
        size="small"
        sx={{ color: 'inherit' }}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="no">Norsk</MenuItem>
      </Select>
    </FormControl>
  );
}

