// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

export const DetailArticle = dynamic(() => import('./DetailArticle'));
export const ListArticles = dynamic(() => import('./ListArticles'));



