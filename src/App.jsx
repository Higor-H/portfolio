import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useTranslation, I18nextProvider } from "react-i18next";
import { useEffect } from "react";
import i18n from "./i18n";

import Portfolio from "./pages/Portfolio";

const RootRedirect = () => {
  const { i18n } = useTranslation();
  // Redireciona para o idioma atual (detectado ou salvo)
  return <Navigate to={`/${i18n.language}`} replace />;
};

// Wrapper para sincronizar i18n com a URL
const LanguageWrapper = ({ children }) => {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const langFromUrl = location.pathname.split('/')[1];

  useEffect(() => {
    if (['pt', 'en'].includes(langFromUrl) && langFromUrl !== i18n.language) {
      const changeLang = async () => {
        try {
          await i18n.changeLanguage(langFromUrl);
          localStorage.setItem('userLanguage', langFromUrl);
        } catch (err) {
          console.error('Erro ao mudar idioma:', err);
        }
      };

      void changeLang();
    }
  }, [langFromUrl, i18n.language, i18n]);

  useEffect(() => {
    document.documentElement.lang = i18n.language === 'pt' ? 'pt-br' : i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo.description'));
    }
  }, [t, i18n.language]);

  return children;
};

function App() {
 return (
  <I18nextProvider i18n={i18n}>
    <Routes>
      {/* Rota raiz: Redireciona baseada na detecção do i18n */}
      <Route path="/" element={<RootRedirect />} />

      <Route path="/:lang/*" element={
        <LanguageWrapper>
          <Routes>
            <Route index element={<Portfolio/>} />
            <Route path="*" element={<Portfolio/>} />
          </Routes>
        </LanguageWrapper>
      } />

      {/* Fallback */}
      <Route path="*" element={<RootRedirect />} />
    </Routes>
  </I18nextProvider>
 );
}

export default App;
