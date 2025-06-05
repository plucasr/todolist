"use client"
import React from 'react';
import styles from './Box.module.scss';

interface BoxProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'small' | 'medium' | 'large';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  children: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({
  variant = 'default',
  padding,
  maxWidth,
  className,
  children,
}) => {
  const boxClasses = [
    styles.box,
    styles[variant],
    padding && styles[`padding-${padding}`],
    maxWidth && styles[`maxWidth-${maxWidth}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={boxClasses}>{children}</div>;
}; 