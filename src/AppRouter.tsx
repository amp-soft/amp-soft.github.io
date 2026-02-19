import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '@/features/Home/HomePage';
import NotFoundPage from '@/features/NotFound/NotFoundPage';
import AuraDreamPrivacyPage from '@/features/Privacy/AuraDreamPrivacyPage';
import RemindersPrivacyPage from '@/features/Privacy/RemindersPrivacyPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

export const AppRouter = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy/auradream" element={<AuraDreamPrivacyPage />} />
        <Route path="/privacy/reminders" element={<RemindersPrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
};