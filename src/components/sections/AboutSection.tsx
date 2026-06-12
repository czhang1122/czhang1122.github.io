import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SectionLabel, { SectionWrapper } from '../SectionLabel';
import { aboutParagraphs, skills, site } from '../../data/portfolio';

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionLabel num="01" label="About Me" />
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="start">
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            {aboutParagraphs.map((paragraph, i) => (
              <Typography
                key={i}
                component={motion.p}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                variant="body1"
                color="text.secondary"
              >
                {paragraph}
              </Typography>
            ))}
          </Stack>
          <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 4 }}>
            {skills.map((skill, i) => (
              <Chip
                key={skill}
                label={skill}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                sx={{
                  bgcolor: '#e8f0fa',
                  color: 'secondary.main',
                  border: '1px solid #c2d4ec',
                  fontSize: '0.68rem',
                }}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{ maxWidth: 280, mx: { xs: 'auto', md: 0 } }}
          >
            <Box
              component="img"
              src={site.aboutPhoto}
              alt="About photo"
              sx={{
                width: '100%',
                aspectRatio: '3/4',
                objectFit: 'cover',
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'surface.main',
                display: 'block',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
