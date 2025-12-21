import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { PlatformPage } from './components/PlatformPage';
import { UseCasesPage } from './components/UseCasesPage';
import { PricingPage } from './components/PricingPage';
import { DownloadsPage } from './components/DownloadsPage';
import { DocsPage } from './components/DocsPage';
import { ContactPage } from './components/ContactPage';
import { ProductsPage } from './components/ProductsPage';
import { AboutPage } from './components/AboutPage';
import { ResourcesPage } from './components/ResourcesPage';
import { AdminDashboard } from './components/AdminDashboard';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}