import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import Logo from '../assets/icon.png';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#4B4376' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <img src={Logo} alt="Wealth Setu" style={{ height: 60 }} />
          </Link>
        </Box>

        {/* Responsive: Drawer on Mobile, Buttons on Desktop */}
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  <ListItem button component={Link} to="/">
                    <HomeIcon fontSize="small" style={{ marginRight: 8 }} />
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button>
                    <ScheduleIcon fontSize="small" style={{ marginRight: 8 }} />
                    <ListItemText primary="Book an Appointment" />
                  </ListItem>
                  <ListItem button>
                    <CallIcon fontSize="small" style={{ marginRight: 8 }} />
                    <ListItemText primary="Call Us" />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              color="inherit"
              startIcon={<HomeIcon />}
              component={Link}
              to="/"
              sx={{ textTransform: 'none', fontWeight: 'bold' }}
            >
              Home
            </Button>

            <Button
              color="inherit"
              endIcon={<MenuIcon />}
              onClick={handleOpenMenu}
              sx={{ textTransform: 'none', fontWeight: 'bold' }}
            >
              Contact Us
            </Button>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
              <MenuItem onClick={handleCloseMenu}>
                <ScheduleIcon fontSize="small" style={{ marginRight: 8 }} />
                Book an Appointment
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <CallIcon fontSize="small" style={{ marginRight: 8 }} />
                Call Us
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
