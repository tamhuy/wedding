import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LanguageDropdown from './LanguageDropdown';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

export default function ButtonAppBar() {
  const [isTop, setIsTop] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const renderToolbarContent = () => (
    <>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        PL + QT
      </Typography>

      <Button color="inherit" onClick={() => scrollToSection('venue')}>{t('header.venue')}</Button>
      <Button color="inherit" onClick={() => scrollToSection('program')}>{t('header.program')}</Button>
      <Button color="inherit" onClick={() => scrollToSection('our-story')}>{t('header.ourStory')}</Button>
      <LanguageDropdown />
    </>
  );

    const scrollToSection = (sectionId: string) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      // try to get toolbar height (MUI Toolbar root class)
      const toolbar = document.querySelector('.MuiToolbar-root') as HTMLElement | null;
      const headerHeight = (toolbar?.clientHeight) ?? 64;

      const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Fixed AppBar always present; style changes based on scroll */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isTop ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.95)',
          color: isTop ? 'black' : 'black',
          boxShadow: isTop ? 'none' : undefined,
          backdropFilter: isTop ? 'none' : 'blur(6px)',
          transition: 'background-color 200ms, box-shadow 200ms, color 200ms',
          pointerEvents: 'auto',
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Toolbar sx={{ textShadow: isTop ? 'none' : 'none' }}>{renderToolbarContent()}</Toolbar>
      </AppBar>

      {/* Always reserve toolbar height to avoid layout jumps; banner will move behind when at top */}
      <Toolbar />
    </Box>
  );
}