import dynamic from 'next/dynamic';

export const ListTestimonial = dynamic(() => import('./ListTestimonial'));
export const DetailTestimonial = dynamic(() => import ('./DetailTestimonial'));
