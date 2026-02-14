import { useTranslation } from 'react-i18next';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function LanguageDropdown() {
  const { t, i18n } = useTranslation();
  const current = (i18n.language || 'en').split('-')[0];

  const handleChange = (e: SelectChangeEvent<string>) => {
    console.log(e.target.value)
    void i18n.changeLanguage(e.target.value as string);
  };

  return (
    <FormControl variant="standard" sx={{ minWidth: 96 }}>
      <InputLabel id="language-select-label">{t('language.selectLanguage')}</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={current}
        onChange={handleChange}
        label={t('language.selectLanguage')}
        size="small"
        sx={{ color: 'inherit' }}
      >
        <MenuItem value="en">{t('language.english')}</MenuItem>
        <MenuItem value="no">{t('language.norwegian')}</MenuItem>
        <MenuItem value="vn">{t('language.vietnamese')}</MenuItem>
        <MenuItem value="de">{t('language.german')}</MenuItem>
      </Select>
    </FormControl>
  );
}