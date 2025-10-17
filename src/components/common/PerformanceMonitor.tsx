import React, { useEffect, useState } from 'react';
import './PerformanceMonitor.css';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  className?: string;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = false,
  onMetricsUpdate,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const largestContentfulPaint = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
      
      // Simulate other metrics (in real implementation, you'd use Web Vitals library)
      const firstInputDelay = 0;
      const cumulativeLayoutShift = 0;
      const timeToInteractive = navigation.domContentLoadedEventEnd - (navigation.fetchStart || 0);

      const performanceMetrics: PerformanceMetrics = {
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay,
        cumulativeLayoutShift,
        timeToInteractive
      };

      setMetrics(performanceMetrics);
      onMetricsUpdate?.(performanceMetrics);
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [enabled, onMetricsUpdate]);

  const getPerformanceGrade = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'good': return '#10b981';
      case 'needs-improvement': return '#f59e0b';
      case 'poor': return '#ef4444';
      default: return '#6b7280';
    }
  };

  if (!enabled || !metrics) return null;

  return (
    <div className={`performance-monitor ${className}`}>
      <button
        className="performance-monitor-toggle"
        onClick={() => setIsVisible(!isVisible)}
        title="Afficher les métriques de performance"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 19c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zM21 3l-2 2M21 7l-2-2M3 3l2 2M3 7l2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isVisible && (
        <div className="performance-monitor-panel">
          <div className="performance-monitor-header">
            <h3>Métriques de Performance</h3>
            <button
              className="performance-monitor-close"
              onClick={() => setIsVisible(false)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="performance-metrics">
            <div className="metric-item">
              <span className="metric-label">Temps de chargement</span>
              <span 
                className="metric-value"
                style={{ color: getGradeColor(getPerformanceGrade(metrics.loadTime, { good: 1000, needsImprovement: 3000 })) }}
              >
                {metrics.loadTime.toFixed(0)}ms
              </span>
            </div>
            
            <div className="metric-item">
              <span className="metric-label">First Contentful Paint</span>
              <span 
                className="metric-value"
                style={{ color: getGradeColor(getPerformanceGrade(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })) }}
              >
                {metrics.firstContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            
            <div className="metric-item">
              <span className="metric-label">Largest Contentful Paint</span>
              <span 
                className="metric-value"
                style={{ color: getGradeColor(getPerformanceGrade(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })) }}
              >
                {metrics.largestContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            
            <div className="metric-item">
              <span className="metric-label">Time to Interactive</span>
              <span 
                className="metric-value"
                style={{ color: getGradeColor(getPerformanceGrade(metrics.timeToInteractive, { good: 3800, needsImprovement: 7300 })) }}
              >
                {metrics.timeToInteractive.toFixed(0)}ms
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


