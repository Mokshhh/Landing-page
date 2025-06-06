import React from 'react';
// import { useNavigate } from 'react-router-dom';
import {
  AppBar, Toolbar, IconButton, Button, Menu, MenuItem, Box, Drawer, List, ListItem, ListItemText, useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Logo from '../assets/icon.png';
import { useTheme } from '@mui/material/styles';


const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // const navigate = useNavigate();
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenServicesMenu = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };
  const handleCloseServicesMenu = () => {
    setServicesAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: '#071219' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Link to="/">
            <img src={Logo} alt="Wealth Setu" style={{ height: 70 }} />
          </Link>
        </Box>

        {isMobile ? (
          <>
            <IconButton edge="end" sx={{ color: '#00bc86' }} onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250, bgcolor: '#071219', height: '100%', color: '#00bc86' }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  <ListItem button component={Link} to="/" sx={{ '&:hover': { color: '#ff6a00' } }}>
                    <HomeIcon fontSize="small" style={{ marginRight: 8 }} />
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button sx={{ '&:hover': { color: '#ff6a00' } }}>
                    <ListItemText primary="Services" />
                  </ListItem>
                  <ListItem button sx={{ pl: 4, '&:hover': { color: '#ff6a00' } }}>
                    <ListItemText primary="Loans" />
                  </ListItem>
                  <ListItem button sx={{ pl: 4, '&:hover': { color: '#ff6a00' } }}>
                    <ListItemText primary="Insurance" />
                  </ListItem>
                  <ListItem button sx={{ pl: 4, '&:hover': { color: '#ff6a00' } }}>
                    <ListItemText primary="Investments" />
                  </ListItem>
                  <ListItem button sx={{ pl: 4, '&:hover': { color: '#ff6a00' } }}>
                    <ListItemText primary="Taxes" />
                  </ListItem>
                  <ListItem button sx={{ '&:hover': { color: '#ff6a00' } }}>
                    <ListItemText primary="Pricing" />
                  </ListItem>
                  <ListItem button component="a" href="https://learn.moneymonitors.in/courses" target="_blank" sx={{ '&:hover': { color: '#ff6a00' } }}>
                    <ListItemText primary="Learn" />
                  </ListItem>
                  <ListItem button sx={{ '&:hover': { color: '#ff6a00' } }}>
                    <ScheduleIcon fontSize="small" style={{ marginRight: 8 }} />
                    <ListItemText primary="Book an Appointment" />
                  </ListItem>
                  <ListItem button sx={{ '&:hover': { color: '#ff6a00' } }}>
                    <CallIcon fontSize="small" style={{ marginRight: 8 }} />
                    <ListItemText primary="Call Us" />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <><Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', gap: 2, flexGrow: 1 }}>
              <Button
                sx={{
                  color: '#00bc86',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&:hover': { color: '#ff6a00' },
                  '& .MuiButton-endIcon': {
                    marginLeft: '0px',  // Removes default spacing
                  }
                }}
                endIcon={<ArrowRightIcon />}
            
                onClick={handleOpenServicesMenu}
              >
                Services
              </Button>

              <Menu
                anchorEl={servicesAnchorEl}
                open={Boolean(servicesAnchorEl)}
                onClose={handleCloseServicesMenu}
                sx={{
                  '& .MuiPaper-root': {
                    bgcolor: '#071219',
                    color: '#00bc86',
                  },
                }}
              >
                <MenuItem component={Link}  to="/Loans"
                  onClick={() => {
                    handleCloseServicesMenu();
                  }}
                  sx={{ '&:hover': { color: '#ff6a00' } }}
                >
                  Loans
                </MenuItem>
                <MenuItem onClick={handleCloseServicesMenu} sx={{ '&:hover': { color: '#ff6a00' } }}>
                  Insurance
                </MenuItem>
                <MenuItem onClick={handleCloseServicesMenu} sx={{ '&:hover': { color: '#ff6a00' } }}>
                  Investments
                </MenuItem>
                <MenuItem onClick={handleCloseServicesMenu} sx={{ '&:hover': { color: '#ff6a00' } }}>
                  Taxes
                </MenuItem>
              </Menu>

              <Button
                sx={{
                  color: '#00bc86',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&:hover': { color: '#ff6a00' },
                }}
                component={Link}
                to="/pricing"
              >
                Pricing
              </Button>

              <Button
                sx={{
                  color: '#00bc86',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&:hover': { color: '#ff6a00' },
                }}
                component="a"
                href="https://learn.moneymonitors.in/courses"
                target="_blank"
              >
                Learn
              </Button>

              
            </Box><Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'right', gap: 2, flexGrow: 1 }}><Button
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
                <MenuItem component={Link} to="/BookAppointment"
                  onClick={handleCloseMenu}
                  sx={{ '&:hover': { color: '#ff6a00' } }}
                >
                  <ScheduleIcon fontSize="small" style={{ marginRight: 8 }} />
                  Book an Appointment
                </MenuItem>
                <MenuItem component={Link} to="/CallUs"
                  onClick={handleCloseMenu}
                  sx={{ '&:hover': { color: '#ff6a00' } }}
                >
                  <CallIcon fontSize="small" style={{ marginRight: 8 }} />
                  Call Us
                </MenuItem>
              </Menu>
            </Box></>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;