import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => (
  <Box sx={{ textAlign: 'center', py: 10, backgroundColor: '#F4F6F8' }}>
    <Typography variant="h3" gutterBottom>
      Invest in Your Future
    </Typography>
    <Typography variant="h6" color="text.secondary">
      Trusted financial guidance for CAs & professionals
    </Typography>
    <Button variant="contained" color="primary" sx={{ mt: 3 }}>
      Book Consultation
    </Button>
  </Box>
);

export default Hero;
