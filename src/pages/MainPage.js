import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Grid, List, ListItem, ListItemText, ListItemIcon, Fade, ButtonBase } from '@mui/material';
import { AccountBalance, Savings, Security } from '@mui/icons-material';

const phrases = [
  "Focus on Taxes, We Manage the Rest",
  "One-Stop Financial Solutions for Your Clients",
  "Boost Your Clients' Lifetime Value",
];

const specialties = [
  { text: 'Comprehensive Wealth Management', icon: <Savings sx={{ color: '#FFF4B7' }} /> },
  { text: 'Strategic Debt Solutions', icon: <AccountBalance sx={{ color: '#FFF4B7' }} /> },
  { text: 'Tailored Insurance Strategies', icon: <Security sx={{ color: '#FFF4B7' }} /> },
];

export default function MainPage() {
  const [index, setIndex] = useState(0);

  // Auto-swipe every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Box
  sx={{
    position: 'relative',
    p: { xs: 2, sm: 3, md: 6 },
    minHeight: '100vh',
    backgroundColor: '#4B4376',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: 300,
      height: 300,
      bgcolor: '#FFD700',
      borderRadius: '50%',
      filter: 'blur(150px)',
      top: '-50px',
      left: '-50px',
      zIndex: 0,
      opacity: 0.3,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: 400,
      height: 400,
      bgcolor: '#003161',
      borderRadius: '50%',
      filter: 'blur(200px)',
      bottom: '-100px',
      right: '-100px',
      zIndex: 0,
      opacity: 0.2,
    },
  }}
>

      <Grid
  container
  spacing={4}
  justifyContent="center"
  alignItems="center"
  sx={{
    maxWidth: 1200,
    zIndex: 1, // So it’s above background shapes
  }}
>

        {/* Left Card with Auto-Swipe Phrases */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
  <Card
    sx={{
      width: 300,
      height: 420,
      borderRadius: 4,
      bgcolor: 'transparent',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      px: 2,
      backdropFilter: 'blur(8px)',
    }}
  >
    <CardContent sx={{ textAlign: 'center' }}>
      <Fade in key={index} timeout={500}>
        <Typography
          variant="h5"
          sx={{
            color: '#FFD700',
            fontWeight: 600,
            fontFamily: "'PT Serif', serif",
          }}
        >
          {phrases[index]}
        </Typography>
      </Fade>
      {/* Dots */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        {phrases.map((_, i) => (
          <ButtonBase
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: 10,
              height: 10,
              mx: 0.5,
              borderRadius: '50%',
              backgroundColor: i === index ? '#FFD700' : '#fff',
              opacity: 0.4,
              transition: 'all 0.3s',
              '&:hover': { opacity: 0.8 },
            }}
          />
        ))}
      </Box>
    </CardContent>
  </Card>
</Grid>

        {/* Right Card with Static Bullet Points */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
  <Card
    sx={{
      width: 300,
      height: 420,
      borderRadius: 4,
      bgcolor: 'transparent',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      px: 2,
      backdropFilter: 'blur(8px)',
    }}
  >
    <CardContent>
      <Typography
        variant="h5"
        sx={{
          color: '#7EF9F9',
          fontWeight: 600,
          fontFamily: "'PT Serif', serif",
          mb: 2,
        }}
      >
        What we specialize in
      </Typography>
      <List>
        {specialties.map((item, idx) => (
          <ListItem key={idx} sx={{ py: 1 }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    color: '#ffffff',
                    fontWeight: 400,
                    fontFamily: "'Roboto', sans-serif",
                  }}
                >
                  {item.text}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
</Grid>

      </Grid>
    </Box>
  );
}