import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { AccountBalance, Savings, Security } from '@mui/icons-material';


export default function WhatWeDo() {
   const specialties = [
    { text: 'Comprehensive Wealth Management', icon: <Savings sx={{ color: '#ff6a00' }} /> },
    { text: 'Strategic Debt Solutions', icon: <AccountBalance sx={{ color: '#ff6a00' }} /> },
    { text: 'Tailored Insurance Strategies', icon: <Security sx={{ color: '#ff6a00' }} /> },
  ];
  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 2, sm: 4, md: 10 },
        backgroundColor: '#071219',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: '#00bc86',
          fontFamily: "'Montserrat', sans-serif",
          mb: 2,
        }}
      >
        What we Provide/ What's our USP?
      </Typography>
    <Box
      sx={{
        backgroundColor: '#071219',
        color: '#e0fff7',
        py: 6,
        px: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
     
      {/* Process Steps Column */}
      <Box sx={{ flex: 1, maxWidth: { md: '33%' } }}>
        {[{
          step: 'Step 1',
          heading: 'Tell us your needs',
          description: 'Choose from loans, insurance, investments or taxes',
        }, {
          step: 'Step 2',
          heading: 'Get Matched with Experts',
          description: 'We connect you with finance professionals.',
        }, {
          step: 'Step 3',
          heading: 'Receive a Personalized Plan',
          description: 'Get tailored solutions for your finance goals.',
        }, {
          step: 'Step 4',
          heading: 'Track and Implement',
          description: 'Follow through with expert guidance.',
        }].map(({ step, heading, description }, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: 'rgba(0, 188, 134, 0.05)',
              border: '1px solid rgba(0,188,134,0.2)',
              borderRadius: 2,
              mb: 3,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ color: '#00bc86', fontWeight: 700, fontFamily: 'Montserrat', textAlign: 'center' }}
              >
                {step}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: '#e0fff7', fontFamily: 'Montserrat', mt: 1, textAlign: 'center'  }}
              >
                {heading}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#a0d6c6', fontFamily: 'Open Sans', mt: 1, textAlign: 'center'  }}
              >
                {description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Loan Assistance Column */}
      <Box sx={{ flex: 2 }}>
        <Card
          sx={{
            backgroundColor: 'rgba(0, 188, 134, 0.05)',
            border: '1px solid rgba(0,188,134,0.2)',
            borderRadius: 2,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ color: '#00bc86', fontWeight: 700, fontFamily: 'Montserrat', mb: 3, textAlign: 'center' }}
            >
              How We Help You with Loans
            </Typography>
            <Typography
            variant="body1"
            sx={{ color: '#e0fff7', fontFamily: 'Open Sans', lineHeight: 1.8, textAlign: 'justify' }}
          >
            Navigating the world of loans can be 
            overwhelming due to the variety of
            options, interest rates, and policies 
            offered by different banks. 
            At WealthSetu, we simplify this process
            for you. Our team thoroughly analyzes 
            loan facilities from multiple banks, 
            comparing their terms and conditions. 
            We then guide you to select the best
            loan tailored to your specific needs, 
            ensuring you make an informed decision 
            with confidence.
          </Typography>
          </CardContent>
        </Card>
         {/* Why Us Box */}
        <Card
          sx={{
            mt: 4,
            backgroundColor: 'rgba(0, 188, 134, 0.05)',
            border: '1px solid rgba(0,188,134,0.2)',
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: '#00bc86', fontWeight: 700, fontFamily: 'Montserrat', mb: 2 }}
          >
            Why Us?
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {specialties.map((item, index) => (
              <Card
                key={index}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(0,188,134,0.2)',
                  borderRadius: 2,
                  p: 1.5,
                  minWidth: 200,
                  flex: '1 1 200px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                {item.icon}
                <Typography sx={{ color: '#e0fff7', fontFamily: 'Open Sans' }}>
                  {item.text}
                </Typography>
              </Card>
            ))}
          </Box>
        </Card>
      </Box>
    </Box>
   </Box> 
  );
}
