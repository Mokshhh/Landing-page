// src/pages/BookAppointment.js
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  Fade,
} from '@mui/material';

export default function BookAppointment() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenSnackbar(true);
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <Fade in timeout={700}>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#5C538A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          py: 6,
          overflow: 'hidden',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: 300,
            height: 300,
            bgcolor: '#FFD700',
            borderRadius: '50%',
            filter: 'blur(150px)',
            top: '-100px',
            left: '-100px',
            zIndex: 0,
            opacity: 0.3,
          },
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            maxWidth: 500,
            zIndex: 1,
            backgroundColor: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            p: 4,
            borderRadius: 4,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Typography variant="h5" sx={{ color: '#FFD700', mb: 3, textAlign: 'center', fontWeight: 600 }}>
            Book an Appointment
          </Typography>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
            InputLabelProps={{ style: { color: '#fff' } }}
            sx={{ input: { color: '#fff' } }}
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
            required
            InputLabelProps={{ style: { color: '#fff' } }}
            sx={{ input: { color: '#fff' } }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            type="email"
            InputLabelProps={{ style: { color: '#fff' } }}
            sx={{ input: { color: '#fff' } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, py: 1.5, fontWeight: 'bold', borderRadius: '24px' }}
          >
            Submit
          </Button>
        </Box>

        {/* Snackbar */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="success" sx={{ width: '100%' }}>
            🚀 Thank you! We’ll contact you very soon!
          </Alert>
        </Snackbar>
      </Box>
    </Fade>
  );
}
