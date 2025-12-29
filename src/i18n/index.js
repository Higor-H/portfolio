import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pt from './locales/pt.json';
import en from './locales/en.json';


const getInitialLanguage = () => {
    // 1. Verifica se a URL tem um idioma específico (ex: /en, /pt)
    const pathLang = window.location.pathname.split('/')[1];
    if (['pt', 'en'].includes(pathLang)) {
        localStorage.setItem('userLanguage', pathLang);
        return pathLang;
    }

    // 2. Verifica se o usuário já escolheu um idioma antes
    const savedLanguage = localStorage.getItem('userLanguage');
    if (savedLanguage) {
        return savedLanguage;
    }

    // 3. Detecta o idioma do navegador
    const browserLang = navigator.language.split('-')[0];
    const detectedLang = ['pt', 'en'].includes(browserLang) ? browserLang : 'pt';

    // Salva a detecção inicial para consistência futura
    localStorage.setItem('userLanguage', detectedLang);
    return detectedLang;
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            pt: { translation: pt },
            en: { translation: en }
        },
        lng: getInitialLanguage(), // Força o idioma calculado pela nossa função
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false
        },
        detection: {
            // Ordem de prioridade: caminho da URL > localStorage > navegador
            order: ['path', 'localStorage', 'navigator'],
            lookupFromPathIndex: 0,
            caches: ['localStorage']
        }
    });

export default i18n;