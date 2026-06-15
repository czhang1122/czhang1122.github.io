import { Box, Collapse, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionLabel, { SectionWrapper } from '../SectionLabel';
import { experienceCards, experienceEntries } from '../../data/portfolio';

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExperience = (index: number) => {
    setExpandedIndex((current) => (current === index ? null : index));
  };

  return (
    <SectionWrapper id="experience">
      <SectionLabel num="02" label="Experience" />

      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 5 }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 3, md: 6 }}
          sx={{ width: '100%', maxWidth: 980 }}
        >
          {experienceCards.map((card, i) => {
            const entry = experienceEntries[i];

            return (
              <Stack
                key={card.role}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                alignItems="center"
                spacing={1.2}
                sx={{ flex: '1 1 0', minWidth: { xs: '100%', md: 280 }, maxWidth: 340 }}
              >
                <Paper
                  component="button"
                  type="button"
                  onClick={() => toggleExperience(i)}
                  elevation={0}
                  aria-expanded={expandedIndex === i}
                  aria-controls={`experience-panel-${i}`}
                  sx={{
                    width: '100%',
                    maxWidth: 320,
                    minHeight: 120,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    border: '1px solid',
                    borderColor: expandedIndex === i ? 'primary.main' : 'divider',
                    bgcolor: 'background.paper',
                    cursor: 'pointer',
                    borderRadius: 2,
                    transition: 'transform 120ms ease, border-color 120ms ease',
                    '&:hover': { borderColor: 'primary.main', transform: 'translateY(-2px)' },
                  }}
                >
                  <Box
                    component="img"
                    src={card.logo}
                    alt={card.alt}
                    sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </Paper>

                <Typography variant="body2" color="text.secondary" textAlign="center">
                  {card.role}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" textAlign="center">
                  {card.date}
                </Typography>

                <Collapse in={expandedIndex === i} timeout="auto" unmountOnExit sx={{ width: '100%' }}>
                  <Paper
                    id={`experience-panel-${i}`}
                    elevation={0}
                    sx={{
                      mt: 1,
                      p: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      bgcolor: 'background.default',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 0.25,
                      }}
                    >
                      {entry.company}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '0.65rem',
                        color: 'text.disabled',
                        mb: 1.5,
                      }}
                    >
                      {entry.location}
                    </Typography>
                    <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                      {entry.bullets.map((bullet) => (
                        <Box
                          component="li"
                          key={`${entry.company}-${bullet.slice(0, 30)}`}
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
                  </Paper>
                </Collapse>
              </Stack>
            );
          })}
        </Stack>
      </Box>
    </SectionWrapper>
  );
}
