# James Kariuki - Portfolio Website

A modern, interactive portfolio website showcasing professional experience, projects, and expertise in data analysis, econometrics, and statistical modeling.

## Overview

This is a professional portfolio website for **James Kariuki**, a Data Analyst with 3+ years of experience in data analysis, econometrics, and statistical modeling. The portfolio features a clean, modern design with interactive elements and smooth navigation.

## Features

- **Modern Design**: Glassmorphism effects, animated background, and responsive layout
- **Interactive Elements**: Matrix rain animation background, smooth transitions, and dynamic gallery
- **Multi-page Layout**: Comprehensive sections covering all professional aspects
- **Responsive Navigation**: Custom navigation system with header and footer components
- **Gallery System**: Image gallery powered by gallery.json configuration
- **Theme Support**: Multiple theme options for customization
- **Professional Showcase**: Display of skills, experience, education, and achievements

## Project Structure

```
portfolio/
├── index.html              # Home page - main entry point
├── about.html              # About section
├── skills.html             # Technical skills showcase
├── experience.html         # Professional experience
├── education.html          # Educational background
├── projects.html           # Notable projects
├── achievements.html       # Awards and achievements
├── interests.html          # Personal interests
├── gallery.html            # Photo gallery
├── contact.html            # Contact information
├── referees.html           # Professional references
│
├── assets/                 # Static assets
│   ├── css/
│   │   ├── style.css       # Main stylesheet
│   │   ├── themes.css      # Theme definitions
│   │   └── nav.css         # Navigation styles
│   ├── images/
│   │   └── cards/          # Card images for homepage
│   ├── files/              # Downloadable files (resume, etc.)
│   └── js/
│       ├── main.js         # Main application logic
│       ├── nav.js          # Navigation handling
│       ├── gallery.js      # Gallery functionality
│       └── matrix.js       # Matrix animation effect
│
├── components/             # Reusable HTML components
│   ├── header.html         # Header component
│   └── footer.html         # Footer component
│
└── gallery/                # Gallery configuration
    └── gallery.json        # Gallery image metadata
```

## Page Descriptions

| Page | Purpose |
|------|---------|
| `index.html` | Landing page with key highlights and quick overview |
| `about.html` | Detailed background and professional summary |
| `skills.html` | Technical skills and proficiencies |
| `experience.html` | Work history and professional accomplishments |
| `education.html` | Academic qualifications and certifications |
| `projects.html` | Notable projects and case studies |
| `achievements.html` | Awards, recognitions, and achievements |
| `interests.html` | Personal interests and hobbies |
| `gallery.html` | Photo gallery with image showcase |
| `contact.html` | Contact methods and communication channels |
| `referees.html` | Professional references |

## Technologies Used

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with glassmorphism effects, animations, and themes
- **JavaScript**: Interactive features and dynamic content
  - Canvas animation (Matrix rain effect)
  - Gallery management
  - Navigation handling
  - Component loading

### Key Features
- Responsive design for all screen sizes
- Smooth animations and transitions
- Dynamic component injection (header/footer)
- JSON-based gallery configuration
- Canvas-based background animations

## Components

### Header (`components/header.html`)
Shared navigation header loaded across all pages.

### Footer (`components/footer.html`)
Shared footer loaded across all pages.

### Gallery System (`gallery/gallery.json`)
Stores gallery image metadata in JSON format for easy management:
```json
[
  { "type": "image", "file": "image-filename.jpg" }
]
```

## Styling System

### CSS Files
- **style.css**: Main stylesheet with layout, typography, and card designs
- **themes.css**: Theme definitions for different color schemes
- **nav.css**: Navigation-specific styles

### Design Elements
- Glassmorphism effects (frosted glass appearance)
- Animated blob background
- Canvas matrix rain animation
- Smooth reveal animations
- Responsive card grid layout

## JavaScript Modules

| File | Purpose |
|------|---------|
| `main.js` | Core application logic and initialization |
| `nav.js` | Navigation system and menu handling |
| `gallery.js` | Gallery loading and image display logic |
| `matrix.js` | Canvas-based matrix rain animation effect |

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic HTTP server (for local development)

### Local Development

1. **Simple HTTP Server** (Python):
   ```bash
   python -m http.server 8000
   ```

2. **Node.js http-server**:
   ```bash
   npx http-server
   ```

3. Open your browser and navigate to `http://localhost:8000`

### Deployment

This is a static website and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service
- Traditional web hosting with HTTP server

## Customization

### Adding New Pages
1. Create a new `.html` file in the root directory
2. Link it from the navigation in the header component
3. Follow the existing page structure for consistency

### Modifying Themes
Edit `assets/css/themes.css` to customize colors and appearance.

### Updating Gallery
Add image entries to `gallery/gallery.json`:
```json
{ "type": "image", "file": "your-image.jpg" }
```

### Updating Components
Edit shared components in `components/` folder:
- `header.html` - Navigation and branding
- `footer.html` - Footer content

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## File Storage

- **assets/files/**: Store downloadable files (resume, certificates, etc.)
- **assets/images/cards/**: Card images for homepage sections
- **gallery/**: Gallery configuration and metadata

## Performance Features

- Optimized image formats (WebP where supported)
- Minimal dependencies (vanilla JavaScript)
- Lightweight CSS with no frameworks
- Efficient canvas animations
- Fast page load times

## Future Enhancements

Potential additions:
- Dark/Light theme toggle
- Blog or article section
- Project filtering and search
- Interactive charts for skills/experience
- Contact form backend
- Animation preferences (prefers-reduced-motion)
- Multi-language support

## License

This portfolio website is personal property of James Kariuki.

## Contact

For inquiries or questions about this portfolio, please visit the [contact page](contact.html).

---

**Last Updated**: December 2025
**Portfolio Owner**: James Kariuki
**Professional Title**: Data Analyst & Economist
