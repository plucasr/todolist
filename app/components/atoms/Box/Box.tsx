import React from 'react';
import styles from './Box.module.scss';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
  margin?: 'none' | 'small' | 'medium' | 'large';
  variant?: 'default' | 'elevated' | 'outlined';
  maxWidth?: string;
  fullWidth?: boolean;
}

export const Box: React.FC<BoxProps> = ({
  children,
  className = '',
  padding = 'medium',
  margin = 'none',
  variant = 'default',
  maxWidth,
  fullWidth = false,
}) => {
  const boxClasses = [
    styles.box,
    styles[`padding-${padding}`],
    styles[`margin-${margin}`],
    styles[variant],
    fullWidth ? styles.fullWidth : '',
    className,
  ].filter(Boolean).join(' ');

  const style = maxWidth ? { maxWidth } : undefined;

  return (
    <div className={boxClasses} style={style}>
      {children}
    </div>
  );
}; 