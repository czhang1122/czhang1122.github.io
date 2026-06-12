import { Outlet } from 'react-router-dom';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { NAV_WIDTH } from '../../theme';
import { navItems, site } from '../../data/portfolio';
import { projects as projectList } from '../../data/projects';

function NavLink({
  to,
  label,
  num,
  onClick,
  active,
  indent,
}: {
  to: string;
  label: string;
  num?: string;
  onClick?: () => void;
  active?: boolean;
  indent?: boolean;
}) {
  const isHash = to.startsWith('#');

  return (
    <ListItemButton
      onClick={onClick}
      component={isHash ? 'a' : RouterLink}
      {...(isHash ? { href: to } : { to })}
      sx={{
        py: 1.2,
        pl: indent ? 3 : 0,
        borderBottom: '1px solid',
        borderColor: 'divider',
        color: active ? 'primary.main' : 'text.secondary',
        '&:first-of-type': { borderTop: '1px solid', borderColor: 'divider' },
        fontFamily: '"Space Mono", monospace',
        fontSize: indent ? '0.65rem' : '0.72rem',
        letterSpacing: '0.04em',
      }}
    >
      {num && (
        <Typography
          component="span"
          sx={{ color: 'text.disabled', fontSize: '0.65rem', mr: 1.25, minWidth: 18 }}
        >
          {num}
        </Typography>
      )}
      <ListItemText primary={label} primaryTypographyProps={{ fontSize: 'inherit' }} />
    </ListItemButton>
  );
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNav = (id: string) => {
    onNavigate?.();
    if (!isHome) return;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Stack justifyContent="space-between" sx={{ height: '100%', py: 4, px: 3 }}>
      <Box>
        <Typography
          component={RouterLink}
          to="/"
          onClick={onNavigate}
          sx={{
            fontFamily: '"Space Mono", monospace',
            fontWeight: 700,
            fontSize: '0.95rem',
            color: 'text.primary',
            textDecoration: 'none',
            lineHeight: 1.3,
            display: 'block',
            mb: 0.5,
          }}
        >
          {site.firstName}
          <br />
          {site.lastName}
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.7rem',
            color: 'text.secondary',
            mb: 4,
          }}
        >
          // {site.title}
        </Typography>

        <List disablePadding>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={isHome ? `#${item.id}` : `/#${item.id}`}
              num={item.num}
              label={item.label}
              onClick={() => handleNav(item.id)}
            />
          ))}
          <Box sx={{ pl: 2 }}>
            {projectList.map((p) => (
              <NavLink
                key={p.slug}
                to={`/projects/${p.slug}`}
                label={p.shortTitle}
                indent
                active={location.pathname === `/projects/${p.slug}`}
                onClick={onNavigate}
              />
            ))}
          </Box>
        </List>
      </Box>

      <Stack spacing={1} sx={{ mt: 4 }}>
        <Typography
          component="a"
          href={`mailto:${site.email}`}
          sx={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.68rem',
            color: 'text.disabled',
            textDecoration: 'none',
            wordBreak: 'break-all',
            '&:hover': { color: 'primary.main' },
          }}
        >
          {site.email}
        </Typography>
        <Typography
          component="a"
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.68rem',
            color: 'text.disabled',
            textDecoration: 'none',
            '&:hover': { color: 'primary.main' },
          }}
        >
          LinkedIn
        </Typography>
        <Button
          component="a"
          href={site.resumePath}
          download={site.resumeFilename}
          variant="contained"
          color="primary"
          startIcon={<DownloadIcon sx={{ fontSize: 14 }} />}
          sx={{ mt: 1, alignSelf: 'flex-start', fontSize: '0.68rem', py: 1 }}
        >
          Resume
        </Button>
      </Stack>
    </Stack>
  );
}

export default function MainLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      {isMobile && (
        <Box
          component="header"
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
            py: 1.5,
            bgcolor: 'background.paper',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography
            component={RouterLink}
            to="/"
            sx={{
              fontFamily: '"Space Mono", monospace',
              fontWeight: 700,
              fontSize: '0.85rem',
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            C. Zhang
          </Typography>
          <IconButton onClick={() => setDrawerOpen(true)} aria-label="Open menu">
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      {!isMobile && (
        <Box
          component="aside"
          sx={{
            width: NAV_WIDTH,
            flexShrink: 0,
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            bgcolor: 'background.paper',
            borderRight: '1px solid',
            borderColor: 'divider',
            overflowY: 'auto',
            zIndex: 100,
          }}
        >
          <SidebarContent />
        </Box>
      )}

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: NAV_WIDTH } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <SidebarContent onNavigate={() => setDrawerOpen(false)} />
      </Drawer>

      <Box
        component="main"
        sx={{
          flex: 1,
          minWidth: 0,
          ml: { xs: 0, md: `${NAV_WIDTH}px` },
          pt: { xs: 7, md: 0 },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
