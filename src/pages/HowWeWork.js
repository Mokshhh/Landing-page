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
    elevation={3}
    sx={{
      p: 3,
      backgroundColor: 'rgba(255, 255, 255, 0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      backdropFilter: 'blur(8px)',
      borderRadius: 3,
      textAlign: 'center',
      height: '100%',
    }}
  >
    <Typography
      variant="h6"
      sx={{
        color: '#FFD700',
        fontFamily: "'PT Serif', serif",
        fontWeight: 600,
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="subtitle1"
      sx={{
        mt: 1,
        color: '#ffffff',
        fontFamily: "'PT Serif', serif",
        fontWeight: 500,
      }}
    >
      {heading}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        mt: 1,
        color: '#cccccc',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 300,
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
        py: 6,
        px: { xs: 2, sm: 4, md: 10 },
        backgroundColor: '#5C538A', // Lighter than #4B4376
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          color: '#FFD700',
          fontFamily: "'PT Serif', serif",
          mb: 6,
        }}
      >
        How We Work?
      </Typography>

      {/* Two Rows, Each with 2 Boxes */}
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
