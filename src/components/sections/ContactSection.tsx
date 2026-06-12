import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';
import SectionLabel, { SectionWrapper } from '../SectionLabel';
import { contactIntro, site } from '../../data/portfolio';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', company: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    const required = ['name', 'email', 'message'] as const;
    const nextErrors: Record<string, boolean> = {};
    required.forEach((key) => {
      if (!form[key].trim()) nextErrors[key] = true;
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const subject = form.subject.trim() || 'Portfolio contact';
    const body = `Name: ${form.name}\nEmail: ${form.email}${form.company ? `\nCompany: ${form.company}` : ''}\n\n${form.message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${subject} — ${form.name}`)}&body=${encodeURIComponent(body)}`;
    setSuccess(true);
    setForm({ name: '', company: '', email: '', subject: '', message: '' });
    setTimeout(() => setSuccess(false), 6000);
  };

  const links = [
    { href: `mailto:${site.email}`, icon: <EmailIcon />, label: site.email },
    { href: site.linkedin, icon: <LinkedInIcon />, label: 'LinkedIn' },
    { href: site.resumePath, icon: <DownloadIcon />, label: 'Download resume — PDF', download: site.resumeFilename },
  ];

  return (
    <SectionWrapper id="contact" sx={{ borderBottom: 'none' }}>
      <SectionLabel num="04" label="Contact" />
      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid item xs={12} md={6}>
          <Typography
            component={motion.h2}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            variant="h2"
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, mb: 2 }}
          >
            Let&apos;s build
            <br />
            something{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              together.
            </Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {contactIntro.body}
          </Typography>
          <Stack spacing={1.25}>
            {links.map((link) => (
              <Box
                key={link.label}
                component="a"
                href={link.href}
                download={link.download}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  p: 1.5,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 0.5,
                  bgcolor: 'surface.main',
                  textDecoration: 'none',
                  color: 'text.secondary',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.72rem',
                  transition: 'border-color 0.2s, color 0.2s',
                  '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
                  '& svg': { fontSize: 18, opacity: 0.5 },
                  '&:hover svg': { opacity: 1 },
                }}
              >
                {link.icon}
                {link.label}
              </Box>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack spacing={1.75} component={PaperForm}>
            <Grid container spacing={1.5}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  placeholder="Jane Smith"
                  value={form.name}
                  error={errors.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Company"
                  placeholder="Acme Robotics"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  size="small"
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label="Email"
              type="email"
              placeholder="jane@company.com"
              value={form.email}
              error={errors.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              size="small"
            />
            <TextField
              fullWidth
              label="Subject"
              placeholder="Full-time role · Internship · Collaboration"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              size="small"
            />
            <TextField
              fullWidth
              label="Message"
              placeholder="Tell me about the role or what you're working on..."
              value={form.message}
              error={errors.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              multiline
              minRows={4}
              size="small"
            />
            <Button
              variant="contained"
              color="primary"
              startIcon={<SendIcon />}
              onClick={handleSubmit}
              sx={{ alignSelf: 'flex-start' }}
            >
              Send message
            </Button>
            {success && (
              <Alert severity="success" sx={{ fontFamily: '"Space Mono", monospace', fontSize: '0.78rem' }}>
                Message sent — I&apos;ll get back to you soon.
              </Alert>
            )}
          </Stack>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

function PaperForm({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </Box>
  );
}
