import React from 'react';
import { Box, Typography, Button, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BackgrndImg from '../assets/background-1.jpg';


const Hero = () => {
  const navigate = useNavigate();
  return (
    <><Box
    sx={{
          backgroundColor: '#071219',
          height: '60px'
        }}
    
    ></Box><Fade in timeout={1000}>

      <Box
        sx={{
          backgroundColor: '#071219',
          py: { xs: 8, sm: 12 },
          px: { xs: 2, sm: 4, lg: 8 },
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Animation - Floating Gradient Circles */}
        <Box
          sx={{
            position: 'absolute',
            width: 300,
            height: 900,
            bgcolor: '#00bc86',
            borderRadius: '50%',
            filter: 'blur(150px)',
            top: '20%',
            left: '-100px',
            opacity: 0.15,
            zIndex: 0,
            animation: 'float 8s ease-in-out infinite',
            '@keyframes float': {
              '0%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-40px)' },
              '100%': { transform: 'translateY(0px)' },
            },
          }} />
        <Box
          sx={{
            position: 'absolute',
            width: 250,
            height: 250,
            bgcolor: '#00bc86',
            borderRadius: '50%',
            filter: 'blur(120px)',
            bottom: '10%',
            right: '-80px',
            opacity: 0.2,
            zIndex: 0,
            animation: 'floatReverse 10s ease-in-out infinite',
            '@keyframes floatReverse': {
              '0%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(30px)' },
              '100%': { transform: 'translateY(0px)' },
            },
          }} />

        <Box
          sx={{
            maxWidth: '1200px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '4fr 7fr' },
            gap: 4,
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >

          {/* Left Column */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontFamily: "'PT Serif', serif",
                color: '#00bc86',
                mb: 4,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(45deg, #00bc86, #ff6a00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0px 2px 8px rgba(0, 188, 134, 0.4)',
                animation: 'slideIn 1.2s ease-out',
                '@keyframes slideIn': {
                  '0%': { transform: 'translateX(-50px)', opacity: 0 },
                  '100%': { transform: 'translateX(0)', opacity: 1 },
                },
              }}
            >
              Your Personal Finance Assistance Team
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/BookAppointment')}
              sx={{
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
              Book Your Appointment
            </Button>
          </Box>

          {/* Right Column */}
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
            <Box
              sx={{
                backgroundColor: '#1a2526',
                borderRadius: '16px',
                p: 3,
                boxShadow: '0px 4px 20px rgba(0,0,0,0.5)',
                maxWidth: '550px',
                width: '100%',
              }}
            >
              <img
                src={BackgrndImg}
                alt="Financial growth"
                style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
              <Typography
                variant="body1"
                sx={{
                  textAlign: 'center',
                  color: '#e0e0e0',
                  fontWeight: 500,
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: '1.125rem',
                  mb: 1
                }}
              >
                Take Control of Your Finances with Expert Guidance
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: 'center',
                  color: '#9e9e9e', // Grey color
                  fontWeight: 600, // Bolder
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: '0.875rem', // Smaller
                }}
              >
                Loans | Insurance | Investments | Taxes
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fade></>
  );
};

export default Hero;