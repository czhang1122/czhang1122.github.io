import { Typography, Box } from '@mui/material';

interface SectionLabelProps {
  num: string;
  label: string;
}

export default function SectionLabel({ num, label }: SectionLabelProps) {
  return (
    <Typography
      variant="caption"
      sx={{
        fontFamily: '"Space Mono", monospace',
        fontSize: '0.68rem',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'text.disabled',
        display: 'block',
        mb: { xs: 3, md: 4 },
      }}
    >
      // {num} — {label}
    </Typography>
  );
}

export function SectionWrapper({
  id,
  children,
  sx,
}: {
  id: string;
  children: React.ReactNode;
  sx?: object;
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
        borderBottom: '1px solid',
        borderColor: 'divider',
        scrollMarginTop: { xs: 72, md: 0 },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
