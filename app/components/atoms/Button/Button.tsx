import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  href,
  onClick,
  className,
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className || ''}`;

  if (href) {
    return (
      <a href={href} className={buttonClass} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}; 