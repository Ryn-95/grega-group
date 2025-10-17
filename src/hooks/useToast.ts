import { useState, useCallback } from 'react';
import { ToastProps } from '../components/common/Toast';

interface ToastOptions {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback((options: ToastOptions) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: ToastProps = {
      id,
      message: options.message,
      type: options.type || 'info',
      duration: options.duration || 5000,
      position: options.position || 'top-right',
      onClose: removeToast
    };

    setToasts(prev => [...prev, newToast]);
    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const clearAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  const showSuccess = useCallback((message: string, options?: Partial<ToastOptions>) => {
    return addToast({ ...options, message, type: 'success' });
  }, [addToast]);

  const showError = useCallback((message: string, options?: Partial<ToastOptions>) => {
    return addToast({ ...options, message, type: 'error' });
  }, [addToast]);

  const showWarning = useCallback((message: string, options?: Partial<ToastOptions>) => {
    return addToast({ ...options, message, type: 'warning' });
  }, [addToast]);

  const showInfo = useCallback((message: string, options?: Partial<ToastOptions>) => {
    return addToast({ ...options, message, type: 'info' });
  }, [addToast]);

  return {
    toasts,
    addToast,
    removeToast,
    clearAllToasts,
    showSuccess,
    showError,
    showWarning,
    showInfo
  };
};

