# Contributing to NOX Loading Screen

Thank you for your interest in contributing! Every contribution helps make this loading screen better for the entire FiveM community.

## 🎯 How to Contribute

### 1. Report Bugs
Found a bug? Please [open an issue](https://github.com/HyperSentry-Labs/hs-loadingscreen/issues) with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### 2. Suggest Features
Have an idea? [Open an issue](https://github.com/HyperSentry-Labs/hs-loadingscreen/issues) with the `feature-request` label and describe:
- What problem it solves
- How it should work
- Why it benefits users

### 3. Submit Code
Ready to code? Here's how:

#### Setup
```bash
# Fork the repository
git clone https://github.com/YOUR_USERNAME/hs-loadingscreen.git
cd hs-loadingscreen

# Create a feature branch
git checkout -b feature/amazing-feature

# Make your changes
# Test thoroughly

# Commit
git commit -m "Add amazing feature"

# Push
git push origin feature/amazing-feature

# Open Pull Request
```

#### Guidelines
- **Code style:** Follow existing patterns
- **No frameworks:** Keep it vanilla JS/CSS
- **Performance:** Maintain 60fps target
- **Testing:** Test on multiple browsers
- **Documentation:** Update README if needed

### 4. Improve Documentation
- Fix typos
- Add examples
- Improve clarity
- Translate to other languages

## 📋 Development Setup

### Requirements
- Modern web browser (Chrome, Firefox, Edge)
- FiveM server for testing
- Text editor (VS Code recommended)

### Local Testing
1. Clone the repository
2. Copy to your FiveM server resources
3. Add `ensure hs-loadingscreen` to server.cfg
4. Restart server and test

### Code Structure
```
hs-loadingscreen/
├── index.html          # Main HTML structure
├── assets/
│   ├── css/style.css   # All styling (GPU-optimized)
│   └── js/script.js    # All logic (60fps)
```

## 🎨 Design Principles

1. **Performance First** — 60fps animations, no jank
2. **No Dependencies** — Pure vanilla JS/CSS
3. **Local Assets** — No CDN, no external requests
4. **Accessibility** — Touch device fallbacks
5. **Maintainability** — Clean, documented code

## 🐛 Bug Reports

When reporting bugs, please include:

```markdown
**Describe the bug**
A clear description of what the bug is.

**To reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: Windows 10
- Browser: Chrome 120
- FiveM Version: [version]
```

## ✨ Feature Requests

When requesting features, please include:

```markdown
**Is your feature request related to a problem?**
A clear description of the problem. Ex. "I'm always frustrated when..."

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request.
```

## 📝 Pull Request Template

```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Other (describe)

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Edge
- [ ] Tested on mobile devices
- [ ] 60fps maintained

## Checklist
- [ ] Code follows existing style
- [ ] No new dependencies added
- [ ] Documentation updated
- [ ] Changes are minimal and focused
```

## 🎯 Priority Areas

We're especially looking for help with:

1. **Performance optimizations** — Keep it fast
2. **Mobile improvements** — Better touch support
3. **Accessibility** — Screen reader support
4. **Translations** — Multi-language support
5. **New effects** — Visual enhancements
6. **Bug fixes** — Edge cases and compatibility

## 📞 Questions?

- Open an issue with the `question` label
- Check existing issues for answers
- Review the README for documentation

## 🙏 Thank You!

Every contribution, no matter how small, is appreciated. Together we can build the best loading screen for the FiveM community!

---

**License:** By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
