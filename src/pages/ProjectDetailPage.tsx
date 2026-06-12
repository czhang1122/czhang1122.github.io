import { Link as RouterLink, useParams, Navigate } from 'react-router-dom';
import {
  Box,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import { getProjectBySlug } from '../data/projects';
import Footer from '../components/Footer';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/" replace />;

  return (
    <>
      <Box
        sx={{
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          py: { xs: 4, md: 6 },
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Button
          component={RouterLink}
          to="/#projects"
          startIcon={<ArrowBackIcon />}
          sx={{
            mb: 3,
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.7rem',
            color: 'text.disabled',
          }}
        >
          All projects
        </Button>

        <Typography
          sx={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'primary.main',
            mb: 1,
          }}
        >
          {project.num} — {project.type}
        </Typography>

        <Typography
          component={motion.h1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          variant="h1"
          sx={{ fontSize: { xs: '1.8rem', md: '3rem' }, mb: 2 }}
        >
          {project.title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 580, mb: 3, lineHeight: 1.75 }}
        >
          {project.tagline}
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          gap={3}
          sx={{
            py: 2,
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          {project.meta.map((item) => (
            <Box key={item.label}>
              <Typography
                sx={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.62rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'text.disabled',
                }}
              >
                {item.label}
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box sx={{ px: { xs: 2.5, sm: 4, md: 6, lg: 8 }, py: { xs: 4, md: 6 }, maxWidth: 860 }}>
        {project.sections.map((section, i) => (
          <Box
            key={section.heading}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.05 }}
            sx={{ mb: 4 }}
          >
            <Typography
              sx={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'text.disabled',
                pb: 1,
                mb: 2,
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            >
              {section.heading}
            </Typography>

            {section.paragraphs?.map((p) => (
              <Typography key={p.slice(0, 30)} variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
                {p}
              </Typography>
            ))}

            {section.pullQuote && (
              <Paper
                elevation={0}
                sx={{
                  borderLeft: '3px solid',
                  borderColor: 'primary.main',
                  pl: 2,
                  py: 1.5,
                  my: 3,
                  bgcolor: 'surface.main',
                  borderRadius: '0 4px 4px 0',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.92rem',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                  }}
                >
                  {section.pullQuote}
                </Typography>
              </Paper>
            )}

            {section.list && (
              <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', mb: 2 }}>
                {section.list.map((item) => (
                  <Box
                    component="li"
                    key={item.slice(0, 40)}
                    sx={{
                      fontSize: '0.93rem',
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      py: 0.75,
                      pl: 2,
                      position: 'relative',
                      borderBottom: '1px solid',
                      borderColor: 'surface.main',
                      '&::before': {
                        content: '"—"',
                        position: 'absolute',
                        left: 0,
                        color: 'text.disabled',
                        fontFamily: '"Space Mono", monospace',
                      },
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            )}

            {section.stats && (
              <Grid
                container
                sx={{
                  gap: '1px',
                  bgcolor: 'divider',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  overflow: 'hidden',
                  my: 3,
                }}
              >
                {section.stats.map((stat) => (
                  <Grid item xs={6} sm={3} key={stat.label}>
                    <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 0 }}>
                      <Typography
                        sx={{
                          fontFamily: '"Space Mono", monospace',
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          letterSpacing: '-0.03em',
                          lineHeight: 1,
                          mb: 0.5,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            )}

            {section.tags && (
              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
                {section.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '0.7rem',
                      bgcolor: 'surface.main',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  />
                ))}
              </Stack>
            )}
          </Box>
        ))}

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          spacing={2}
          sx={{ mt: 6, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}
        >
          {project.prevSlug ? (
            <Button
              component={RouterLink}
              to={`/projects/${project.prevSlug}`}
              sx={{ fontFamily: '"Space Mono", monospace', fontSize: '0.72rem', color: 'text.disabled', alignItems: 'flex-start' }}
            >
              <Box textAlign="left">
                <Typography sx={{ fontSize: '0.65rem', color: 'text.disabled' }}>Previous project</Typography>
                <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: 'text.primary' }}>
                  ← {getProjectBySlug(project.prevSlug)?.shortTitle}
                </Typography>
              </Box>
            </Button>
          ) : (
            <Box />
          )}
          {project.nextSlug && (
            <Button
              component={RouterLink}
              to={`/projects/${project.nextSlug}`}
              sx={{ fontFamily: '"Space Mono", monospace', fontSize: '0.72rem', color: 'text.disabled', alignItems: 'flex-end', ml: 'auto' }}
            >
              <Box textAlign="right">
                <Typography sx={{ fontSize: '0.65rem', color: 'text.disabled' }}>Next project</Typography>
                <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: 'text.primary' }}>
                  {getProjectBySlug(project.nextSlug)?.shortTitle} →
                </Typography>
              </Box>
            </Button>
          )}
        </Stack>
      </Box>

      <Footer />
    </>
  );
}
