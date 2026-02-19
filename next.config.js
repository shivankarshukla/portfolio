/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for hosting on platforms like Netlify, Vercel, GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Set base path if deploying to a subdirectory (uncomment if needed)
  // basePath: '/your-repo-name',
  
  // Trailing slash for better compatibility
  trailingSlash: true,
  
  // Optimize for production
  swcMinify: true,
  
  // Compress assets
  compress: true,
  
  // Enable experimental features for better performance
  // experimental: {
  //   optimizeCss: true,
  // },
  
  // Note: Headers are removed because they don't work with static export
  // For production deployment with headers, use server-side hosting (Vercel, Netlify Functions)
}

module.exports = nextConfig
