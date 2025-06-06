import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Divider, Fade } from '@mui/material';

const loanOptions = [
  'Home Loans',
  'Vehicle Loans',
  'Personal / Business Loans',
  'Gold Loans',
];

const documentSteps = [
  {
    title: 'Income Documents',
    description:
      'Accepted for 3 types of occupation:\n\n- Professional: Form 16, Salary Slip\n- Business: Business proof + ITR of 3 yrs\n- SEP: Same as Business + Degree copy',
  },
  {
    title: 'Bank Details',
    description: '12 months bank statement required.',
  },
  {
    title: 'KYC',
    description: 'Aadhar, PAN, and passport-sized photo.',
  },
  {
    title: 'Liabilities',
    description: 'Details of any existing loans or financial obligations.',
  },
  {
    title: 'Property Papers & Collateral',
    description: 'Documents of property to be mortgaged as collateral.',
  },
];

export default function LoansPage() {
  const [activeLoan, setActiveLoan] = useState(null);

  return (
    <Box sx={{ backgroundColor: '#071219', minHeight: '100vh', p: 4, color: '#e0fff7' }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, color: '#00bc86', fontWeight: 700, fontFamily: 'Montserrat' }}
      >
        Process
      </Typography>

      <Grid container spacing={3}>
        {/* Left Column: Vertical Loan Options, Centered on Y-Axis */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              minHeight: '100vh',
              justifyContent: 'center',
            }}
          >
            {loanOptions.map((loan, index) => (
              <Card
                key={index}
                onClick={() => setActiveLoan(loan === activeLoan ? null : loan)}
                sx={{
                  backgroundColor: 'rgba(0, 188, 134, 0.05)',
                  border: `1px solid ${activeLoan === loan ? '#00bc86' : 'rgba(0, 188, 134, 0.2)'}`,
                  borderRadius: 2,
                  cursor: 'pointer',
                  '&:hover': {
                    borderColor: '#00bc86',
                    boxShadow: '0 4px 20px rgba(0, 188, 134, 0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#e0fff7', fontWeight: 600 }}>
                    {loan}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>

        {/* Right Column: Flowchart Documentation Process */}
        <Grid item xs={12} md={9}>
          {activeLoan && (
            <Fade in={!!activeLoan} timeout={500}>
              <Box sx={{ pl: { md: 4 }, pt: 2 }}>
                <Typography
                  variant="h6"
                  sx={{ color: '#ffca28', mb: 3, fontFamily: 'Montserrat', fontWeight: 600 }}
                >
                  {activeLoan} Documentation Process
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {documentSteps.map((step, idx) => (
                    <Box key={idx}>
                      <Card
                        sx={{
                          backgroundColor: 'rgba(255, 202, 40, 0.05)',
                          border: '1px solid rgba(255, 202, 40, 0.2)',
                          borderRadius: 2,
                          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                          transition: 'transform 0.2s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                          },
                        }}
                      >
                        <CardContent>
                          <Typography
                            variant="subtitle1"
                            sx={{ color: '#ffca28', fontWeight: 600, mb: 1 }}
                          >
                            Step {idx + 1}: {step.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#e0fff7', whiteSpace: 'pre-line' }}>
                            {step.description}
                          </Typography>
                        </CardContent>
                      </Card>
                      {idx < documentSteps.length - 1 && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
                          <Divider
                            sx={{
                              width: '2px',
                              height: '24px',
                              backgroundColor: '#ffca28',
                              opacity: 0.5,
                            }}
                          />
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Fade>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}