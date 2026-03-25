import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable Container Component
 * Max width: 1200px, centered, with responsive padding
 */
export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
