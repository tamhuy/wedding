import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LanguageDropdown from './LanguageDropdown';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
//import CloseIcon from '@mui/icons-material/Close';

export default function ButtonAppBar() {
  const [isTop, setIsTop] = useState(true);
  const { t } = useTranslation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navbarItems = [
    { label: t('header.ourStory'), id: 'our-story' },
    { label: t('header.program'), id: 'program' },
    { label: t('header.venue'), id: 'venue' },
    { label: t('header.faq'), id: 'faq' },
    { label: t('header.rsvp'), id: 'rsvp' },
  ]
  
  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  }

  const drawer = (
    <Box className="" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
     
      <List>
        {navbarItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => scrollToSection(item.id)} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const renderToolbarContent = () => (
    <>
      
      <div className="hidden lg:flex flex-1 justify-center">
        {navbarItems.map((item, index) => (
          <div>
          <Button key={item.id} sx={{margin: '0 0.5rem', minWidth: '100px'}} color="inherit" onClick={() => scrollToSection(item.id)}>
            {item.label}
          </Button>
          {index < navbarItems.length - 1 && (
        <span className="text-gray-400">|</span>
      )}
      </div>
        ))}
        
      </div>
      <div className="flex items-center absolute right-0 mr-4">
        <Button className="block md:!hidden !bg-primary/70 hover:!bg-primary/50 " sx={{margin: '0 1.5rem'}} variant="contained" onClick={() => scrollToSection('rsvp')}>{t('header.rsvp')}</Button>
        <LanguageDropdown />
        <div className="block lg:hidden">
          <IconButton
            
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
        </div>
      </div>
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
      <nav>
        <Drawer
         // container={container}
         anchor='right'
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          // sx={{
          //   display: { xs: 'block', sm: 'none' },
          //   '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          // }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* Always reserve toolbar height to avoid layout jumps; banner will move behind when at top */}
      <Toolbar />
    </Box>
  );
}