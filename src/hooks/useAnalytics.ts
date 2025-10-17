import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

// Hook personnalisé pour Google Analytics / Analytics tracking
export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view
    trackPageView(location.pathname + location.search);
  }, [location]);

  const trackPageView = (page: string) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page,
      });
    }

    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Page View:', page);
    }
  };

  const trackEvent = ({ category, action, label, value }: AnalyticsEvent) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }

    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Event:', { category, action, label, value });
    }
  };

  const trackClick = (elementName: string, elementType: string = 'button') => {
    trackEvent({
      category: 'User Interaction',
      action: 'click',
      label: `${elementType}: ${elementName}`,
    });
  };

  const trackFormSubmit = (formName: string) => {
    trackEvent({
      category: 'Form',
      action: 'submit',
      label: formName,
    });
  };

  const trackScroll = (percentage: number) => {
    trackEvent({
      category: 'Scroll Depth',
      action: 'scroll',
      label: `${percentage}%`,
      value: percentage,
    });
  };

  const trackTiming = (category: string, variable: string, time: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'timing_complete', {
        name: variable,
        value: time,
        event_category: category,
      });
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('⏱️ Timing:', { category, variable, time });
    }
  };

  return {
    trackPageView,
    trackEvent,
    trackClick,
    trackFormSubmit,
    trackScroll,
    trackTiming,
  };
};

