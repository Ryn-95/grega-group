import React from 'react';
import { Toast, ToastProps } from './Toast';
import './ToastContainer.css';

interface ToastContainerProps {
  toasts: ToastProps[];
  onRemoveToast: (id: string) => void;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  onRemoveToast,
  position = 'top-right'
}) => {
  return (
    <div className={`toast-container ${position}`}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={onRemoveToast}
          position={position}
        />
      ))}
    </div>
  );
};

