// HowWeWork.js
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const steps = [
  { title: 'Step 1', desc: 'Tell us your needs' },
  { title: 'Step 2', desc: 'Get Matched with Experts' },
  { title: 'Step 3', desc: 'Receive a Personalized Plan' },
  { title: 'Step 4', desc: 'Track and Implement' },
];

const StepBox = ({ title, desc }) => (
  <Paper elevation={3} sx={{ p: 2, minHeight: 120, textAlign: 'center', borderRadius: 2 }}>
    <Typography variant="h6" fontWeight={700}>{title}</Typography>
    <Typography variant="body1" mt={1}>{desc}</Typography>
  </Paper>
);

const HowWeWork = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#648DB3', textAlign: 'center' }}>
      <Typography variant="h4" fontWeight={600} mb={4}>
        How We Work
      </Typography>

      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {/* Row 1 */}
        <Grid item xs={5} sm={5}>
          <StepBox title={steps[0].title} desc={steps[0].desc} />
        </Grid>
        <Grid item xs={2} display="flex" justifyContent="center">
          <ArrowForwardIcon sx={{ fontSize: 40 }} />
        </Grid>
        <Grid item xs={5} sm={5}>
          <StepBox title={steps[1].title} desc={steps[1].desc} />
        </Grid>

        {/* Arrow between rows */}
        <Grid item xs={12} display="flex" justifyContent="center" my={2}>
          <ArrowDownwardIcon sx={{ fontSize: 40 }} />
        </Grid>

        {/* Row 2 */}
        <Grid item xs={5} sm={5}>
          <StepBox title={steps[2].title} desc={steps[2].desc} />
        </Grid>
        <Grid item xs={2} display="flex" justifyContent="center">
          <ArrowForwardIcon sx={{ fontSize: 40 }} />
        </Grid>
        <Grid item xs={5} sm={5}>
          <StepBox title={steps[3].title} desc={steps[3].desc} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowWeWork;
