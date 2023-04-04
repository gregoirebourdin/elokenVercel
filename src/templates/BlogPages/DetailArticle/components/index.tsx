// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

export const Content = dynamic(() => import('./Content'));
export const OtherArticles = dynamic(() => import('./OtherArticles'));
export const ShareArticle = dynamic(() => import('./ShareArticle'));
export const NewsLetter = dynamic(() => import('./NewsLetter'));





