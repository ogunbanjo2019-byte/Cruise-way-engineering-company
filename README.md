# Cruise-Way Engineering - Multi-Page Website

A fully responsive, modern engineering company website built with pure HTML, CSS, and JavaScript. No frameworks, no :root selectors - just clean, efficient code.

## 📋 Project Overview

This is a complete multi-page website for Cruise-Way Engineering Limited featuring:

- **6 Fully Responsive Pages**: Home, Services, Projects, About Us, Team, Contact
- **Mobile-First Design**: Works perfectly on all screen sizes (mobile, tablet, desktop)
- **Pure HTML/CSS/JavaScript**: No React, Vue, or other frameworks
- **No CSS Variables**: All colors and styling are defined directly without :root selectors
- **Professional Design**: Modern, clean, and visually appealing
- **Fast Loading**: Optimized for performance
- **SEO Friendly**: Proper semantic HTML structure

## 📁 File Structure

```
cruise-way-html/
├── index.html           # Home page
├── services.html        # Services page
├── projects.html        # Projects portfolio
├── about.html          # About Us page
├── team.html           # Team members page
├── contact.html        # Contact form page
├── style.css           # Main stylesheet (no :root selectors)
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 How to Use

### Option 1: Open Directly in Browser
1. Extract the zip file
2. Double-click any HTML file (e.g., `index.html`)
3. The website will open in your default browser

### Option 2: Use a Local Server (Recommended)
For better performance and to avoid CORS issues, use a local server:

**Using Python 3:**
```bash
cd cruise-way-html
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

**Using Node.js (http-server):**
```bash
npm install -g http-server
cd cruise-way-html
http-server
```

**Using PHP:**
```bash
cd cruise-way-html
php -S localhost:8000
```

## 🎨 Design Features

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Flexible grid layouts
- Responsive typography
- Touch-friendly navigation

### Navigation
- Fixed header navigation bar
- Mobile hamburger menu
- Active page highlighting
- Smooth scrolling

### Sections Included
- **Hero Section**: Eye-catching banner with call-to-action
- **Services Grid**: 6 service offerings with detailed information
- **Projects Portfolio**: 6 completed projects with details
- **Team Section**: 6 team members with expertise tags
- **Contact Form**: Fully functional contact form with validation
- **Footer**: Comprehensive footer with links and contact info

## 🛠️ Customization

### Change Colors
Edit the color values in `style.css`:
- Primary Green: `#0f9d58`
- Dark Text: `#2d3a32`
- Light Background: `#f7faf8`
- White: `#ffffff`

### Update Content
Simply edit the HTML files directly:
- Change company name, email, phone
- Update service descriptions
- Add/remove team members
- Modify project details

### Add Images
Replace image URLs in the HTML with your own:
```html
<img src="your-image-url.jpg" alt="Description">
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ✨ Features

### JavaScript Functionality
- Mobile menu toggle
- Form validation
- Smooth scrolling
- Scroll animations
- Counter animations
- Active page highlighting
- Responsive behavior

### CSS Features
- No :root selectors - all colors defined directly
- Flexbox layouts
- CSS Grid
- Media queries for responsiveness
- Smooth transitions and animations
- Box shadows and hover effects
- Professional typography

## 📧 Contact Form

The contact form includes:
- Name, email, phone, company fields
- Service selection dropdown
- Message textarea
- Form validation
- Success message display
- Automatic form reset

**Note**: The form currently shows a success message locally. To actually send emails, you'll need to integrate with a backend service like:
- Formspree
- EmailJS
- Your own backend API

## 🔗 Navigation Links

All pages are interconnected:
- Main navigation menu on all pages
- Footer links on all pages
- Call-to-action buttons throughout
- Internal page links

## 📊 Browser Support

Works on:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Tips

1. **Images**: The website uses external image URLs. For better performance, download and host images locally.
2. **Caching**: Enable browser caching for static assets
3. **Minification**: Minify CSS and JavaScript for production
4. **CDN**: Consider using a CDN for image delivery

## 📝 SEO Optimization

The website includes:
- Proper meta tags
- Semantic HTML structure
- Descriptive alt text for images
- Structured heading hierarchy
- Mobile-friendly design

## 🔧 Deployment

To deploy this website:

1. **Shared Hosting**: Upload all files to your web server via FTP
2. **GitHub Pages**: Push to a GitHub repository and enable Pages
3. **Netlify**: Drag and drop the folder to deploy
4. **Vercel**: Connect your repository for automatic deployment
5. **Traditional Server**: Upload files and configure your web server

## 📄 License

This website is provided as-is for Cruise-Way Engineering Limited.

## 📞 Support

For questions or modifications, contact the development team.

---

**Version**: 1.0.0  
**Last Updated**: 2026  
**Built with**: HTML5, CSS3, JavaScript (Vanilla)
