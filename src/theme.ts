import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    mono: Palette['primary'];
    surface: Palette['primary'];
  }
  interface PaletteOptions {
    mono?: PaletteOptions['primary'];
    surface?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2a6e1f',
      light: '#3d9a2c',
      dark: '#1e5016',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1a4d8a',
      light: '#2a6bb8',
      dark: '#123566',
    },
    background: {
      default: '#f7f6f3',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a18',
      secondary: '#5a5850',
      disabled: '#9a9690',
    },
    divider: '#e0ddd6',
    mono: {
      main: '#1a1a18',
    },
    surface: {
      main: '#f0eeea',
    },
  },
  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',
    h1: {
      fontFamily: '"Space Mono", monospace',
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontFamily: '"Space Mono", monospace',
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontFamily: '"Space Mono", monospace',
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: '"Space Mono", monospace',
      letterSpacing: '0.06em',
    },
    body1: {
      lineHeight: 1.85,
    },
    button: {
      fontFamily: '"Space Mono", monospace',
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          WebkitFontSmoothing: 'antialiased',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Space Mono", monospace',
          fontSize: '0.68rem',
        },
      },
    },
  },
});

export const NAV_WIDTH = 260;
