import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GeographyPage } from './pages/GeographyPage';
import { HowWeWorkPage } from './pages/HowWeWorkPage';
import { FAQPage } from './pages/FAQPage';
import { ContactsPage } from './pages/ContactsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { PersonalDataConsentPage } from './pages/PersonalDataConsentPage';
export function App() {
  return <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/geography" element={<GeographyPage />} />
          <Route path="/how-we-work" element={<HowWeWorkPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/personal-data-consent" element={<PersonalDataConsentPage />} />
        </Routes>
      </Layout>
    </Router>;
}