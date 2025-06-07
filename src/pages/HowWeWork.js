import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Divider, Fade } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Phone, Lightbulb, Edit, LocationOn, Assessment, Autorenew, ShowChart, Settings, Receipt } from '@mui/icons-material';

export default function InvestmentComparison() {
  const traditionalSteps = [
    { icon: Phone, text: 'Contact Bank / CA' },
    { icon: Lightbulb, text: 'Receive MF/SIP suggestions' },
    { icon: Edit, text: 'Apply for investments' },
    { icon: LocationOn, text: 'Follow-up visits' },
    { icon: Assessment, text: 'Monitor performance' },
    { icon: Autorenew, text: 'Portfolio rebalancing' },
  ];

  const wealthSetuSteps = [
    { icon: Phone, text: 'Book free consultation' },
    { icon: ShowChart, text: 'We analyze your portfolio' },
    { icon: Settings, text: 'We craft your strategy' },
    { icon: Autorenew, text: 'We rebalance regularly' },
    { icon: Receipt, text: 'You get online reports' },
  ];

  const cardStyle = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    border: '1px solid rgba(0,188,134,0.5)',
    borderRadius: 4,
    p: 2,
    backdropFilter: 'blur(4px)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    },
  };

  return (
    <Box sx={{ backgroundColor: '#071219', minHeight: '100vh', py: 4, px: { xs: 2, md: 6 } }}>
      <Fade in timeout={600}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: '#00bc86', fontWeight: 700, fontFamily: 'Montserrat', mb: 4 }}
        >
          Investment Comparison
        </Typography>
      </Fade>

      <Fade in timeout={800}>
        <Grid container spacing={3}>
          {/* Traditional */}
          <Grid item xs={12} md={6}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#ff6a00', fontWeight: 600, mb: 2 }}>
                  Traditional Process
                </Typography>
                <Divider sx={{ borderColor: '#ff6a00', mb: 2 }} />
                <Timeline position="right">
                  {traditionalSteps.map((step, i) => (
                    <TimelineItem key={i}>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: '#ff6a00' }}>
                          <step.icon />
                        </TimelineDot>
                        {i < traditionalSteps.length - 1 && <TimelineConnector sx={{ bgcolor: '#ff6a00' }} />}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography sx={{ color: '#fff', fontSize: '0.95rem' }}>{step.text}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </CardContent>
            </Card>
          </Grid>

          {/* Wealth Setu */}
          <Grid item xs={12} md={6}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#00bc86', fontWeight: 600, mb: 2 }}>
                  Wealth Setu Process
                </Typography>
                <Divider sx={{ borderColor: '#00bc86', mb: 2 }} />
                <Timeline position="right">
                  {wealthSetuSteps.map((step, i) => (
                    <TimelineItem key={i}>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: '#00bc86' }}>
                          <step.icon />
                        </TimelineDot>
                        {i < wealthSetuSteps.length - 1 && (
                          <TimelineConnector sx={{ bgcolor: '#00bc86' }} />
                        )}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography sx={{ color: '#fff', fontSize: '0.95rem' }}>{step.text}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Fade>
    </Box>
  );
}
