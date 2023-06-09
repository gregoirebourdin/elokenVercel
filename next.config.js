/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL,
  },
  images: {
    // limit of 25 deviceSizes values
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // limit of 25 imageSizes values
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // limit of 50 domains values
    domains: [],
    // path prefix for Image Optimization API, useful with `loader`
    path: '/_next/image',
    // loader can be 'default', 'imgix', 'cloudinary', 'akamai', or 'custom'
    loader: 'default',

    // disable static imports for image files
    disableStaticImages: false,
    // minimumCacheTTL is in seconds, must be integer 0 or more
    minimumCacheTTL: 60,
    // ordered list of acceptable optimized image formats (mime types)
    formats: ['image/webp'],
    // enable dangerous use of SVG images
    dangerouslyAllowSVG: false,
    // set the Content-Security-Policy header
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // when true, every image will be unoptimized
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lifzbeswkndgevimdkoh.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'youtu.be',
      },
      {
        protocol: 'https',
        hostname: 'vercel.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'mhnlmjovpvyolhbtpdck.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      }
    ],
  },
}

module.exports = nextConfig
