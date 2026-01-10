import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageDropdown from './LanguageDropdown';

export default function ButtonAppBar() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY === 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const renderToolbarContent = () => (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        PL + QT
      </Typography>
      <LanguageDropdown />
    </>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Fixed AppBar always present; style changes based on scroll */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isTop ? 'rgba(0,0,0,0.28)' : 'rgba(255,255,255,0.95)',
          color: isTop ? 'white' : 'black',
          boxShadow: isTop ? 'none' : undefined,
          backdropFilter: isTop ? 'none' : 'blur(6px)',
          transition: 'background-color 200ms, box-shadow 200ms, color 200ms',
        }}
      >
        <Toolbar sx={{ textShadow: isTop ? '0 1px 3px rgba(0,0,0,0.6)' : 'none' }}>{renderToolbarContent()}</Toolbar>
      </AppBar>

      {/* Spacer to prevent content from being covered by the fixed AppBar */}
      <Toolbar />
    </Box>
  );
}