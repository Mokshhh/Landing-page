// src/pages/CallUs.js
import React from 'react';
import { Box, Typography, Button, Fade } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

export default function CallUs() {
  return (
    <Fade in timeout={700}>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#5C538A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          py: 6,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: 300,
            height: 300,
            bgcolor: '#FFD700',
            borderRadius: '50%',
            filter: 'blur(150px)',
            top: '-100px',
            left: '-100px',
            zIndex: 0,
            opacity: 0.3,
          },
        }}
      >
        <Box
          sx={{
            zIndex: 1,
            backgroundColor: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            p: 4,
            borderRadius: 4,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            backdropFilter: 'blur(8px)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ color: '#FFD700', mb: 3, fontWeight: 600 }}>
            Call Us
          </Typography>
          <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
            Have a question or need help?
          </Typography>
          <Button
            variant="contained"
            color="success"
            startIcon={<PhoneIcon />}
            href="tel:+919785544402"
            sx={{ borderRadius: '24px', px: 4, py: 1.5 }}
          >
            +91 97855 4402
          </Button>
        </Box>
      </Box>
    </Fade>
  );
}
