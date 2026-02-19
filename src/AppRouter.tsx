import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/features/Home/HomePage';
import NotFoundPage from '@/features/NotFound/NotFoundPage';
import AuraDreamPrivacyPage from '@/features/Privacy/AuraDreamPrivacyPage';
import RemindersPrivacyPage from '@/features/Privacy/RemindersPrivacyPage';

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy/auradream" element={<AuraDreamPrivacyPage />} />
        <Route path="/privacy/reminders" element={<RemindersPrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
};