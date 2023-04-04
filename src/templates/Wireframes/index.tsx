// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

// Animated Components
export const Video = dynamic(() => import('./AnimatedComponents/Video'));
export const CountDown = dynamic(() => import('./AnimatedComponents/CountDown'));
export const LightBoxGallery = dynamic(() => import('./AnimatedComponents/LightBoxGallery'));
export const LogoCloud = dynamic(() => import('./AnimatedComponents/LogoCloud'));
export const NumbersUp = dynamic(() => import('./AnimatedComponents/NumbersUp'));

// Bullet Points
export const BulletPointsCenter = dynamic(() => import('./BulletPoints/BulletPointsCenter'));
export const BulletPointsLeft = dynamic(() => import('./BulletPoints/BulletPointsLeft'));

// Call To Action
export const CtaLeft = dynamic(() => import('./CallToAction/CtaLeft'));
export const CtaCenter = dynamic(() => import('./CallToAction/CtaCenter'));

// Features
export const TextLeft = dynamic(() => import('./Features/TextLeft'));
export const TextRight = dynamic(() => import('./Features/TextRight'));
export const TextCard = dynamic(() => import('./Features/TextCard'));

// Hero
export const HeroCenter = dynamic(() => import('./Hero/HeroCenter'));
export const HeroLeft = dynamic(() => import('./Hero/HeroLeft'));

// Pricing
export const Pricing = dynamic(() => import('./Pricing/Pricing'));

// Testimonials
export const SwiperTestimonials = dynamic(() => import('./Testimonials/SwiperTestimonials'));

// Grids
export const AdvancedList = dynamic(() => import('./Grids/AdvancedList'));
export const BasicList = dynamic(() => import('./Grids/BasicList'));
export const SimpleList = dynamic(() => import('./Grids/SimpleList'));

// Title
export const TitleLeft = dynamic(() => import('./Title/TitleLeft'));
export const TitleCenter = dynamic(() => import('./Title/TitleCenter'));






