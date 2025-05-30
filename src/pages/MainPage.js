import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Fade,
  ButtonBase,
} from '@mui/material';
import { AccountBalance, Savings, Security } from '@mui/icons-material';
import './MainPageAnimations.css';

const phrases = [
  'You Focus on Taxes, We Manage the Rest',
  'One-Stop Financial Solutions for Your Clients',
  "Boost Your Client's Lifetime Value",
];

const specialties = [
  { text: 'Comprehensive Wealth Management', icon: <Savings sx={{ color: '#FFF4B7' }} /> },
  { text: 'Strategic Debt Solutions', icon: <AccountBalance sx={{ color: '#FFF4B7' }} /> },
  { text: 'Tailored Insurance Strategies', icon: <Security sx={{ color: '#FFF4B7' }} /> },
];

export default function MainPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
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
          zIndex: 1,
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {/* Auto-Swipe Phrases Card */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card
            sx={{
              width: { xs: '100%', sm: 320 },
              height: { xs: 'auto', sm: 400 },
              borderRadius: 4,
              bgcolor: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              px: 2,
              py: { xs: 4, sm: 0 },
              backdropFilter: 'blur(8px)',
              textAlign: 'center',
            }}
          >
    <CardContent
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    px: 1,
  }}
>
  {/* Phrase */}
  <Fade in key={index} timeout={500}>
    <Typography
      variant="h5"
      sx={{
        color: '#7EF9F9',
        fontWeight: 600,
        fontFamily: "'PT Serif', serif",
        mb: 2,
      }}
    >
      {phrases[index]}
    </Typography>
  </Fade>

  {/* Dots */}
  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, mb: 4 }}>
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

  {/* Single Description at Bottom */}
  <Typography
    variant="body1"
    sx={{
      color: '#FFD700',
      fontWeight: 600,
      fontSize: '1rem',
      fontFamily: "'Roboto', sans-serif",
    }}
  >
    Loans | Insurance | Investments | Taxes
  </Typography>
</CardContent>

          </Card>
        </Grid>

        {/* Static Bullet Points Card */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card
            sx={{
              width: { xs: '100%', sm: 320 },
              height: { xs: 'auto', sm: 400 },
              borderRadius: 4,
              bgcolor: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              px: 2,
              py: { xs: 4, sm: 0 },
              backdropFilter: 'blur(8px)',
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  color: '#7EF9F9',
                  fontWeight: 600,
                  fontFamily: "'PT Serif', serif",
                  mb: 2,
                  textAlign: 'center',
                  fontSize: { xs: '1.1rem', sm: '1.3rem' },
                }}
              >
                Why Us?
              </Typography>
              <List>
                {specialties.map((item, idx) => (
                  <ListItem key={idx} sx={{ py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            color: '#ffffff',
                            fontWeight: 400,
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: { xs: '0.9rem', sm: '1rem' },
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
