import React from 'react';
import { Box, Typography, Grid, Paper, Avatar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import sushantImg from '../assets/sushant.png';

export default function AboutUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ backgroundColor: '#071219', py: { xs: 6, md: 10 }, px: { xs: 2, md: 6 } }}>
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        align="center"
        sx={{ color: '#00bc86', fontWeight: 700, mb: { xs: 4, md: 6 }, fontFamily: 'Montserrat' }}
      >
        About Us
      </Typography>

      <Grid
        container
        spacing={4}
        direction={isMobile ? 'column' : 'row'}
        alignItems="center"
        justifyContent="center"
      >
        {/* Left: Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Avatar
              src={sushantImg}
              alt="Founder"
              sx={{
                width: { xs: 200, md: 300 },
                height: { xs: 200, md: 300 },
                border: '4px solid #00bc86',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              }}
            />
          </Box>
        </Grid>

        {/* Right: Text Content */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 5 },
              backgroundColor: '#0e1b25',
              color: '#d0fff1',
              borderRadius: 3,
              fontFamily: 'Open Sans',
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: '#00bc86', fontWeight: 600, mb: 2 }}
            >
              Founder of Wealth Setu
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 3, fontSize: isMobile ? '0.95rem' : '1.05rem', lineHeight: 1.7 }}
            >
              I’m the founder of <strong>Wealth Setu</strong>, with a track record in{' '}
              <strong>investment advisory</strong>, <strong>real estate</strong>, and{' '}
              <strong>corporate lending</strong>. I bring real-world expertise to help you master your money.
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Having delivered over <strong>65+ seminars</strong> at platforms like{' '}
              <strong>TED×</strong>, <strong>IIT Delhi</strong>, <strong>IIT Bombay</strong>, and{' '}
              <strong>IIT BHU</strong>, I translate complex financial concepts into actionable strategies
              for professionals.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
