// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

export const Hero = dynamic(() => import('./Hero'));
export const Features = dynamic(() => import('./Features'));
export const Testimonials = dynamic(() => import('./Testimonials'));
export const CallToAction = dynamic(() => import('./CallToAction'));
export const Objectives = dynamic(() => import('./Objectives'));
export const Team = dynamic(() => import('./Team'));
export const Process = dynamic(() => import('./Process'));
export const Steps = dynamic(() => import('./Steps'));
export const Pricing = dynamic(() => import('./Pricing'));
export const Promise = dynamic(() => import('./Promise'));









