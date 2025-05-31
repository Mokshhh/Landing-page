import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const steps = [
  {
    title: 'Step 1',
    heading: 'Tell us your needs',
    desc: 'Choose from loans, insurance, investments or taxes',
  },
  {
    title: 'Step 2',
    heading: 'Get Matched with Experts',
    desc: 'We connect you with finance professionals.',
  },
  {
    title: 'Step 3',
    heading: 'Receive a Personalized Plan',
    desc: 'Get tailored solutions for your finance goals.',
  },
  {
    title: 'Step 4',
    heading: 'Track and Implement',
    desc: 'Follow through with expert guidance.',
  },
];

const StepBox = ({ title, heading, desc }) => (
  <Paper
    elevation={4}
    sx={{
      p: 3,
      backgroundColor: 'rgba(0, 188, 134, 0.05)',
      border: '1px solid rgba(0,188,134,0.2)',
      backdropFilter: 'blur(10px)',
      borderRadius: 4,
      textAlign: 'center',
      height: '100%',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 20px rgba(0, 188, 134, 0.2)',
      },
    }}
  >
    <Typography
      variant="h6"
      sx={{
        color: '#00bc86',
        fontWeight: 700,
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="subtitle1"
      sx={{
        mt: 1,
        color: '#e0fff7',
        fontWeight: 600,
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {heading}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        mt: 1,
        color: '#a0d6c6',
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      {desc}
    </Typography>
  </Paper>
);

const HowWeWork = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 10 },
        backgroundColor: '#071219',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: '#00bc86',
          fontFamily: "'Montserrat', sans-serif",
          mb: 6,
        }}
      >
        How We Work?
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={5} key={index}>
            <StepBox {...step} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowWeWork;
