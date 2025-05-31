import React from 'react';
import { Box, Typography, Grid, Avatar, Paper } from '@mui/material';
import sushantImg from '../assets/sushant.png';

const AboutUs = () => (
  <Box sx={{ px: 4, py: 10, backgroundColor: '#071219' }}>
    <Typography
      variant="h4"
      align="center"
      gutterBottom
      sx={{
        fontWeight: 'bold',
        fontFamily: 'Montserrat, sans-serif',
        letterSpacing: '0.5px',
        color: '#00bc86',
      }}
    >
      About Us
    </Typography>

    <Grid container spacing={8} alignItems="center" justifyContent="center">
      {/* Left: Portrait-style Description Card */}
      <Grid item xs={12} md={6}>
        <Paper
          elevation={5}
          sx={{
            p: 4,
            maxWidth: 460,
            mx: 'auto',
            borderRadius: 4,
            backgroundColor: '#0e1b25',
            fontFamily: "'Open Sans', sans-serif",
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)',
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 700, color: '#00bc86' }}
          >
            <span style={{ color: '#00bc86' }}>Founder</span> of Money Monitors
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#d0fff1',
              mb: 3,
              fontSize: '1.05rem',
              lineHeight: 1.8,
            }}
          >
            I’m the founder of <strong style={{ color: '#00bc86' }}>Money Monitors</strong> and several successful ventures in <strong>investment advisory</strong>, <strong>real estate</strong>, and <strong>corporate lending</strong>. I help professionals take control of their money with real-world experience and strategic expertise.
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: '#b0f5e0', fontSize: '1rem', lineHeight: 1.6 }}
          >
            Having delivered <strong style={{ color: '#00bc86' }}>65+ seminars</strong> at <strong>TED×</strong>, <strong>IIT Delhi</strong>, <strong>IIT Bombay</strong>, and <strong>IIT BHU</strong>, I simplify complex financial concepts into <strong>practical, actionable strategies</strong> that drive impact.
          </Typography>
        </Paper>
      </Grid>

      {/* Right: Circular Image with Gradient */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            background: 'linear-gradient(135deg, #003d31 0%, #00594a 100%)',
            borderRadius: '50%',
            width: 340,
            height: 340,
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 35px rgba(0,0,0,0.7)',
          }}
        >
          <Avatar
            alt="Sushant"
            src={sushantImg}
            sx={{
              width: 300,
              height: 300,
              border: '6px solid #00bc86',
            }}
          />
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default AboutUs;
