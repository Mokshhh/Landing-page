import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Menu, MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/ExpandMore';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import Logo from '../assets/icon.jpg'; 

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
<AppBar
  position="static"
  sx={{ color:"primary" }} // <-- Custom color
>
      <Toolbar sx={{ justifyContent: 'space-between' }}>

        {/* Left Side: Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <img src={Logo} alt="Wealth Setu" style={{ height: 70 }} />
          </Link>
        </Box>

        {/* Right Side: Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            color="inherit"
            startIcon={<HomeIcon />}
            component={Link}
            to="/"
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
          >
            Home
          </Button>

          {/* Dropdown: Contact Us */}
          <Button
            color="inherit"
            endIcon={<MenuIcon />}
            onClick={handleOpenMenu}
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
          >
            Contact Us
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleCloseMenu}>
              <ScheduleIcon fontSize="small" style={{ marginRight: 8 }} />
              Book a Schedule
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <CallIcon fontSize="small" style={{ marginRight: 8 }} />
              Call Us
            </MenuItem>
          </Menu>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
