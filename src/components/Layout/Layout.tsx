import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';

const drawerWidth = 240;

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
        <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/"
          sx={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
        >
          VaultTrack
        </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button component={Link} to="/banks" selected={location.pathname === '/banks'}>
              <ListItemText primary="Gerenciar Bancos" />
            </ListItem>
            <ListItem button component={Link} to="/investments" selected={location.pathname === '/investments'}>
              <ListItemText primary="Gerenciar Investimentos" />
            </ListItem>
            <ListItem button component={Link} to="/summary" selected={location.pathname === '/summary'}>
              <ListItemText primary="Resumo" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
