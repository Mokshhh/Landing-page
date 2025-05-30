import React from 'react';
import { Box, Typography, Grid, Avatar, Paper } from '@mui/material';
import sushantImg from '../assets/sushant.png';

const AboutUs = () => (
  <Box sx={{ px: 4, py: 10, backgroundColor: '#f4f6fa' }}>
    <Typography
      variant="h4"
      align="center"
      gutterBottom
      sx={{
        fontWeight: 'bold',
        fontFamily: 'Montserrat, sans-serif',
        letterSpacing: '0.5px',
      }}
    >
      About Us
    </Typography>

    <Grid container spacing={8} alignItems="center" justifyContent="center">
      {/* Right: Circular Image with Better Gradient */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            background: 'linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%)',
            borderRadius: '50%',
            width: 320,
            height: 320,
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
          }}
        >
          <Avatar
            alt="Sushant"
            src={sushantImg}
            sx={{
              width: 280,
              height: 280,
              border: '6px solid white',
            }}
          />
        </Box>
      </Grid>
      {/* Left: Portrait-style Description Card */}
      <Grid item xs={12} md={6}>
        <Paper
          elevation={5}
          sx={{
            p: 4,
            maxWidth: 440,
            mx: 'auto',
            borderRadius: 4,
            backgroundColor: '#ffffff',
            fontFamily: "'Open Sans', sans-serif",
            boxShadow: '0 6px 25px rgba(0,0,0,0.08)',
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 700, color: '#2c3e50' }}
          >
            <span style={{ color: '#3f51b5' }}>Founder</span> of Money Monitors
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#444',
              mb: 3,
              fontSize: '1.05rem',
              lineHeight: 1.8,
            }}
          >
            I’m the founder of <strong style={{ color: '#3f51b5' }}>Money Monitors</strong> and several successful ventures in <strong>investment advisory</strong>, <strong>real estate</strong>, and <strong>corporate lending</strong>. I help professionals take control of their money with real-world experience and strategic expertise.
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: '#666', fontSize: '1rem', lineHeight: 1.6 }}
          >
            Having delivered <strong style={{ color: '#3f51b5' }}>65+ seminars</strong> at <strong>TED×</strong>, <strong>IIT Delhi</strong>, <strong>IIT Bombay</strong>, and <strong>IIT BHU</strong>, I simplify complex financial concepts into <strong>practical, actionable strategies</strong> that drive impact.
          </Typography>
        </Paper>
      </Grid>

      
    </Grid>
  </Box>
);

export default AboutUs;
