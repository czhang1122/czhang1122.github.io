import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SectionLabel, { SectionWrapper } from '../SectionLabel';
import { experienceCards, experienceEntries } from '../../data/portfolio';

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionLabel num="02" label="Experience" />

      <Grid container spacing={4} sx={{ mb: 5, maxWidth: 720 }}>
        {experienceCards.map((card, i) => (
          <Grid item xs={12} sm={6} key={card.role}>
            <Stack
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              alignItems="center"
              spacing={1}
            >
              <Paper
                elevation={0}
                sx={{
                  width: '100%',
                  maxWidth: 280,
                  height: 120,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box
                  component="img"
                  src={card.logo}
                  alt={card.alt}
                  sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
              </Paper>
              <Typography variant="body2" color="text.secondary">
                {card.role}
              </Typography>
              <Typography variant="body2" color="text.secondary" fontStyle="italic">
                {card.date}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>

      <Stack divider={<Box sx={{ borderBottom: '1px solid', borderColor: 'divider' }} />}>
        {experienceEntries.map((entry, i) => (
          <Grid
            container
            component={motion.div}
            key={entry.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            spacing={{ xs: 1, md: 4 }}
            sx={{ py: 3 }}
          >
            <Grid item xs={12} md={2}>
              <Typography
                sx={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 0.5,
                }}
              >
                {entry.company}
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.65rem',
                  color: 'text.disabled',
                }}
              >
                {entry.location}
              </Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography fontWeight={500} sx={{ mb: 1 }}>
                {entry.role}
              </Typography>
              <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                {entry.bullets.map((bullet) => (
                  <Box
                    component="li"
                    key={bullet.slice(0, 40)}
                    sx={{
                      fontSize: '0.88rem',
                      color: 'text.secondary',
                      lineHeight: 1.65,
                      pl: 2,
                      position: 'relative',
                      mb: 0.75,
                      '&::before': {
                        content: '"—"',
                        position: 'absolute',
                        left: 0,
                        color: 'text.disabled',
                        fontFamily: '"Space Mono", monospace',
                      },
                    }}
                  >
                    {bullet}
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        ))}
      </Stack>
    </SectionWrapper>
  );
}
