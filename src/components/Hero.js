import React from 'react';
import { Box, Typography, Button, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();
  return(
  <Fade in timeout={1000}>
    <Box
      sx={{
        position: 'relative',
        py: { xs: 8, sm: 10 },
        px: 2,
        textAlign: 'center',
        backgroundColor: '#071219', // solid dark background
        color: '#00bc86',
        overflow: 'hidden',
      }}
    >
      {/* Floating Gradient Circle (Right side decoration) */}
      <Box
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          bgcolor: '#ff6a00',
          borderRadius: '50%',
          filter: 'blur(150px)',
          top: '20%',
          right: '-100px',
          opacity: 0.15,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontFamily: "'PT Serif', serif",
            color: '#00bc86',
          }}
        >
          Invest in Your Future
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            color: '#FFFFFF',
            opacity: 0.85,
          }}
        >
          Your trusted partner in financial growth.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/BookAppointment')}
          sx={{
            mt: 4,
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            borderRadius: '24px',
            textTransform: 'none',
            fontSize: '1rem',
            backgroundColor: '#00bc86',
            color: '#071219',
            '&:hover': {
              backgroundColor: '#ff6a00',
              color: '#ffffff',
            },
            boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
          }}
        >
          Book Consultation
        </Button>
      </Box>
    </Box>
  </Fade>
  )};

export default Hero;
