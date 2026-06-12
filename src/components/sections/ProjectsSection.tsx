import { Box, Chip, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SectionLabel, { SectionWrapper } from '../SectionLabel';
import { projects } from '../../data/projects';

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionLabel num="03" label="Projects" />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
          },
          gap: '1px',
          bgcolor: 'divider',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          overflow: 'hidden',
        }}
      >
        {projects.map((project, i) => (
          <Paper
            key={project.slug}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            elevation={0}
            sx={{ borderRadius: 0 }}
          >
            <Box
              component={RouterLink}
              to={`/projects/${project.slug}`}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                p: { xs: 2.5, md: 3 },
                height: '100%',
                textDecoration: 'none',
                color: 'inherit',
                bgcolor: 'background.paper',
                transition: 'background 0.2s ease',
                '&:hover': {
                  bgcolor: 'surface.main',
                  '& .project-arrow': { transform: 'translate(3px, -3px)' },
                },
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography
                  sx={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.65rem',
                    color: 'text.disabled',
                    fontWeight: 700,
                  }}
                >
                  {project.num}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.65rem',
                    color: 'text.disabled',
                    letterSpacing: '0.06em',
                  }}
                >
                  {project.type}
                </Typography>
              </Stack>

              <Box
                sx={{
                  width: '100%',
                  aspectRatio: '16/9',
                  bgcolor: 'surface.main',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.62rem',
                  color: 'text.disabled',
                }}
              >
                {project.shortTitle}
              </Box>

              <Typography
                sx={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
                }}
              >
                {project.title}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ flex: 1, lineHeight: 1.65 }}>
                {project.summary}
              </Typography>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ pt: 1, borderTop: '1px solid', borderColor: 'divider' }}
              >
                <Stack direction="row" flexWrap="wrap" gap={0.75}>
                  {project.chips.map((chip) => (
                    <Chip
                      key={chip}
                      label={chip}
                      size="small"
                      sx={{
                        height: 22,
                        fontSize: '0.62rem',
                        bgcolor: 'surface.main',
                        border: '1px solid',
                        borderColor: 'divider',
                        color: 'text.disabled',
                      }}
                    />
                  ))}
                </Stack>
                <ArrowOutwardIcon
                  className="project-arrow"
                  sx={{
                    fontSize: 18,
                    color: 'text.disabled',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </Stack>
            </Box>
          </Paper>
        ))}
      </Box>
    </SectionWrapper>
  );
}
