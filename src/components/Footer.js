import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ textAlign: 'center', p: 2, borderTop: '1px solid #ccc' }}>
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} Wealth Setu. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
