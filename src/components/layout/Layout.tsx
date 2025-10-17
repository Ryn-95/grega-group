import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BackToTop, ToastContainer, ScrollProgress, CookieConsent, PerformanceMonitor, ChatWidget } from '../common';
import { useToast } from '../../hooks';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { toasts, removeToast } = useToast();

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      <ChatWidget primaryColor="#8B7355" />
      <ToastContainer 
        toasts={toasts} 
        onRemoveToast={removeToast}
        position="top-right"
      />
      <CookieConsent />
      {process.env.NODE_ENV === 'development' && (
        <PerformanceMonitor enabled={true} />
      )}
    </>
  );
};
