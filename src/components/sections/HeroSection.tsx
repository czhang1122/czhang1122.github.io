import { Box, Stack, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedName from '../AnimatedName';
import { SectionWrapper } from '../SectionLabel';
import { site } from '../../data/portfolio';

export default function HeroSection() {
  return (
    <SectionWrapper
      id="hero"
      sx={{
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: { xs: 3, md: 5 } }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                animation: 'pulse 2.5s ease infinite',
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0.25 },
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: '"Space Mono", monospace',
                fontSize: { xs: '0.7rem', md: '0.75rem' },
                color: 'text.disabled',
              }}
            >
              {site.tagline}
            </Typography>
          </Stack>
        </motion.div>

        <AnimatedName />
        <Typography
          component={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          sx={{
            fontFamily: '"Space Mono", monospace',
            fontSize: { xs: '0.85rem', md: '0.9rem' },
            color: 'primary.main',
            letterSpacing: '0.06em',
            mt: 2,
          }}
        >
          // Portfolio
        </Typography>
      </Box>

      <Stack
        direction={{ xs: 'column-reverse', sm: 'row' }}
        alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
        justifyContent="space-between"
        spacing={3}
        sx={{ mt: { xs: 5, md: 6 }, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}
      >
        <Typography
          sx={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.68rem',
            color: 'text.disabled',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: 1.25,
            '&::after': {
              content: '""',
              display: 'block',
              width: 40,
              height: 1,
              bgcolor: 'text.disabled',
            },
          }}
        >
          Scroll to explore
        </Typography>

        <Avatar
          src={site.headshot}
          alt={site.name}
          variant="rounded"
          sx={{
            width: { xs: 96, sm: 120 },
            height: { xs: 96, sm: 120 },
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'surface.main',
          }}
        />
      </Stack>
    </SectionWrapper>
  );
}
