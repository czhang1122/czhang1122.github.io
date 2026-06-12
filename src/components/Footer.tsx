import { Box, Stack, Typography } from '@mui/material';
import { site } from '../data/portfolio';

export default function Footer() {
  const links = [
    { href: '/#about', label: 'About' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'flex-start', sm: 'center' },
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.75rem',
            fontWeight: 700,
          }}
        >
          {site.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.65rem',
            color: 'text.disabled',
            mt: 0.25,
          }}
        >
          {site.title}
        </Typography>
      </Box>

      <Stack direction="row" spacing={2} flexWrap="wrap">
        {links.map((link) => (
          <Typography
            key={link.label}
            component="a"
            href={link.href}
            sx={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.65rem',
              color: 'text.disabled',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main' },
            }}
          >
            {link.label}
          </Typography>
        ))}
      </Stack>

      <Typography
        sx={{
          fontFamily: '"Space Mono", monospace',
          fontSize: '0.65rem',
          color: 'text.disabled',
        }}
      >
        © {new Date().getFullYear()} {site.name}
      </Typography>
    </Box>
  );
}
