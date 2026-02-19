# Shivankar Shukla - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Fast Performance** - Optimized for speed and SEO
- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 📄 **Resume Download** - Direct PDF download functionality
- 🚀 **Production Ready** - Optimized for hosting on various platforms

## Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, CSS3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Google Fonts (Poppins, Space Grotesk, Inter, Fira Code)

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

1. Create a production build:
```bash
npm run build
```

2. For static export (recommended for hosting):
```bash
npm run export
```

This creates an `out` folder with static files ready for deployment.

## Deployment Options

### 1. Vercel (Recommended)
- Connect your GitHub repository to Vercel
- Automatic deployments on push
- Zero configuration needed

### 2. Netlify
- Drag and drop the `out` folder to Netlify
- Or connect your GitHub repository
- Build command: `npm run build`
- Publish directory: `out`

### 3. GitHub Pages
- Push the `out` folder contents to `gh-pages` branch
- Enable GitHub Pages in repository settings

### 4. Traditional Web Hosting
- Upload the contents of the `out` folder to your web host
- Works with any static hosting service

## Mobile Responsiveness

The portfolio is built with mobile-first design principles:

- ✅ Responsive grid layouts
- ✅ Touch-friendly navigation
- ✅ Optimized images and fonts
- ✅ Proper viewport configuration
- ✅ Fast loading on mobile networks

## Project Structure

```
shivankar/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and responsive CSS
│   ├── layout.tsx         # Root layout with meta tags
│   └── page.tsx          # Main page component
├── src/components/        # React components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Landing section
│   ├── About.tsx         # About, skills, education, experience
│   ├── Projects.tsx      # Project showcase
│   └── Contact.tsx       # Contact information
├── public/               # Static assets
│   ├── Resume.pdf       # Downloadable resume
│   └── home_image.png   # Profile image
├── next.config.js       # Next.js configuration
└── package.json         # Dependencies and scripts
```

## Customization

To customize the portfolio for your own use:

1. Update personal information in components
2. Replace `Resume.pdf` with your own resume
3. Replace `home_image.png` with your profile image
4. Update project details in `Projects.tsx`
5. Modify colors and styling in `globals.css`

## Performance Optimizations

- Static export for faster loading
- Image optimization
- CSS minification
- Font optimization
- Smooth scrolling and animations
- Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact

**Shivankar Shukla**
- Email: shuklagkp.7119@gmail.com
- Phone: +91-9621037753
- Location: Noida, India
- LinkedIn: [shivankarshukla](https://linkedin.com/in/shivankarshukla)
- GitHub: [shivankarshukla](https://github.com/shivankarshukla)

---

Built with ❤️ using Next.js and modern web technologies.
