import React from 'react';
import { Box, Typography, Button, Fade } from '@mui/material';

const Hero = () => (
  <Fade in timeout={1000}>
    <Box
      sx={{
        position: 'relative',
        py: { xs: 8, sm: 10 },
        px: 2,
        textAlign: 'center',
        background: 'linear-gradient(to right, #4B4376, #2b5876)', // Right-side gradient
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      {/* Floating Gradient Circle (Right side decoration) */}
      <Box
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          bgcolor: '#FFD700',
          borderRadius: '50%',
          filter: 'blur(150px)',
          top: '20%',
          right: '-100px',
          opacity: 0.2,
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
            color: '#FFD700',
          }}
        >
          Invest in Your Future
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            color: '#FFFFFF',
            opacity: 0.9,
          }}
        >
          Trusted financial guidance for{' '}
          <strong style={{ color: '#FFEE99' }}>CAs & Professionals</strong>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 4,
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            borderRadius: '24px',
            textTransform: 'none',
            fontSize: '1rem',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
          }}
        >
          Book Consultation
        </Button>
      </Box>
    </Box>
  </Fade>
);

export default Hero;
