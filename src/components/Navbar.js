import React from 'react';
import {
  AppBar, Toolbar, IconButton, Button, Menu, MenuItem, Box, Drawer, List, ListItem, ListItemText, useMediaQuery
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

  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  // Mobile menu items
  const mobileMenuItems = [
    { icon: HomeIcon, text: "Home", to: "/" },
    { text: "Services" },
    { text: "Loans", indent: true },
    { text: "Insurance", indent: true },
    { text: "Investments", indent: true },
    { text: "Taxes", indent: true },
    { text: "Pricing" },
    { text: "Learn", href: "https://learn.moneymonitors.in/courses" },
    { icon: ScheduleIcon, text: "Book an Appointment" },
    { icon: CallIcon, text: "Call Us" }
  ];

  return (
    <AppBar position="fixed" sx={{ bgcolor: '#071219' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <img src={Logo} alt="Wealth Setu" style={{ height: 70 }} />
          </Link>
        </Box>

        {isMobile ? (
          // Mobile view
          <>
            <IconButton 
              edge="end" 
              sx={{ color: '#00bc86' }} 
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            <Drawer 
              anchor="right" 
              open={drawerOpen} 
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ 
                  width: 250, 
                  bgcolor: '#071219', 
                  height: '100%', 
                  color: '#00bc86' 
                }}
                role="presentation"
              >
                <List>
                  {mobileMenuItems.map((item, index) => (
                    <ListItem 
                      key={index}
                      button 
                      component={item.href ? "a" : Link}
                      href={item.href}
                      to={item.to}
                      target={item.href ? "_blank" : undefined}
                      onClick={toggleDrawer(false)}
                      sx={{ 
                        pl: item.indent ? 4 : 2,
                        '&:hover': { color: '#ff6a00' } 
                      }}
                    >
                      {item.icon && (
                        <item.icon fontSize="small" sx={{ mr: 1 }} />
                      )}
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          // Desktop view
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              sx={{
                color: '#00bc86',
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': { color: '#ff6a00' },
              }}
              startIcon={<HomeIcon />}
              component={Link}
              to="/"
            >
              Home
            </Button>
            
            <Button
              sx={{
                color: '#00bc86',
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': { color: '#ff6a00' },
              }}
              endIcon={<MenuIcon />}
              onClick={handleOpenMenu}
            >
              Contact Us
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              sx={{
                '& .MuiPaper-root': {
                  bgcolor: '#071219',
                  color: '#00bc86',
                },
              }}
            >
              <MenuItem 
                component={Link} 
                to="/BookAppointment"
                onClick={handleCloseMenu}
                sx={{ '&:hover': { color: '#ff6a00' } }}
              >
                <ScheduleIcon fontSize="small" sx={{ mr: 1 }} />
                Book an Appointment
              </MenuItem>
              <MenuItem 
                component={Link} 
                to="/CallUs"
                onClick={handleCloseMenu}
                sx={{ '&:hover': { color: '#ff6a00' } }}
              >
                <CallIcon fontSize="small" sx={{ mr: 1 }} />
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