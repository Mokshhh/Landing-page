import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#031837', // Navbar and main buttons
    },
    secondary: {
      main: '#FFD700', // Highlights or CTA
    },
    background: {
      default: '#F4F6F8', // Page background
    },
    text: {
      primary: '#0D1117',
      secondary: '#5A6473',
    },
  },
});

export default theme;
