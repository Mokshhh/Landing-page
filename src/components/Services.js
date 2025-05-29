import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const services = [
  { title: 'Investment Planning', desc: 'Secure and grow your wealth with expert advice.' },
  { title: 'Wealth Management', desc: 'Tailored strategies to manage your financial goals.' },
];

const Services = () => (
  <Box sx={{ px: 4, py: 8 }}>
    <Typography variant="h4" align="center" gutterBottom>
      Our Services
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {services.map((s, idx) => (
        <Grid item xs={12} md={4} key={idx}>
          <Paper sx={{ p: 3 }} elevation={3}>
            <Typography variant="h6" gutterBottom>{s.title}</Typography>
            <Typography variant="body2" color="text.secondary">{s.desc}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Services;
