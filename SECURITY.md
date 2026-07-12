# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.2.x   | :white_check_mark: |
| < 1.2   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability within NOX Loading Screen, please send an email to [INSERT EMAIL] rather than opening a public GitHub issue.

**Please include the following information:**

- Type of vulnerability (e.g., XSS, CSRF, etc.)
- Full paths of source file(s) related to the vulnerability
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

**What to expect:**

- Acknowledgment of your report within 48 hours
- An estimate of when a fix will be available
- Credit for the discovery (unless you prefer to remain anonymous)

## Security Best Practices

When using this loading screen:

1. **Keep it updated** — Always use the latest version
2. **Validate inputs** — Sanitize any user-provided data
3. **Use HTTPS** — Serve all assets over HTTPS in production
4. **Monitor logs** — Watch for suspicious activity
5. **Regular backups** — Keep backups of your configuration

## Known Security Considerations

- This loading screen is designed for FiveM NUI environments
- Audio is embedded in video files (no external audio sources)
- All assets are local (no CDN dependencies)
- Text selection and context menus are disabled by design
- Custom cursor system does not handle sensitive data

## Contact

For security-related inquiries, please contact:
- Email: [INSERT EMAIL]
- GitHub: [INSERT GITHUB PROFILE]
