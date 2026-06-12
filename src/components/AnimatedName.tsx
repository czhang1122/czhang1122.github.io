import { motion, useAnimationControls } from 'framer-motion';
import { Box, Typography, useTheme } from '@mui/material';
import { useEffect } from 'react';

interface AnimatedNameProps {
  firstName?: string;
  lastName?: string;
  size?: 'hero' | 'compact';
}

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function AnimatedName({
  firstName = 'Christopher',
  lastName = 'Zhang',
  size = 'hero',
}: AnimatedNameProps) {
  const theme = useTheme();
  const controls = useAnimationControls();
  const fullName = `${firstName} ${lastName}`;
  const letters = fullName.split('');

  useEffect(() => {
    controls.start('visible');
    const interval = setInterval(() => {
      controls.start('hidden').then(() => controls.start('visible'));
    }, 8000);
    return () => clearInterval(interval);
  }, [controls]);

  const fontSize =
    size === 'hero'
      ? { xs: '2.4rem', sm: '3.2rem', md: '4rem', lg: '5rem' }
      : { xs: '1.4rem', md: '1.8rem' };

  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: -8,
          borderRadius: 12,
          background: `linear-gradient(120deg, transparent, ${theme.palette.primary.main}22, transparent)`,
          backgroundSize: '200% 200%',
          filter: 'blur(20px)',
          zIndex: 0,
        }}
      />

      <Typography
        component="div"
        aria-label={fullName}
        sx={{
          position: 'relative',
          zIndex: 1,
          fontFamily: '"Space Mono", monospace',
          fontWeight: 700,
          fontSize,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          display: 'flex',
          flexWrap: 'wrap',
          gap: size === 'hero' ? 0 : 0.5,
        }}
      >
        {letters.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            custom={i}
            initial="hidden"
            animate={controls}
            variants={letterVariants}
            style={{
              display: 'inline-block',
              whiteSpace: char === ' ' ? 'pre' : undefined,
              background:
                char === ' '
                  ? undefined
                  : 'linear-gradient(135deg, #1a1a18 0%, #2a6e1f 40%, #1a4d8a 70%, #1a1a18 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: char === ' ' ? undefined : 'text',
              WebkitTextFillColor: char === ' ' ? undefined : 'transparent',
              animation:
                char === ' '
                  ? undefined
                  : 'shimmer 4s ease-in-out infinite',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Typography>

      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
      `}</style>
    </Box>
  );
}
