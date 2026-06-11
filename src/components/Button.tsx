"use client";

import React from 'react';
import "../app/globals.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export default function Button({ variant = 'primary', children, style, className = '', ...props }: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    padding: '16px 32px',
    borderRadius: '4px',
    fontSize: '12px',
    letterSpacing: '0.2em',
    fontWeight: 600,
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '1px solid transparent',
    fontFamily: 'inherit',
  };

  const variants = {
    primary: {
      background: 'var(--primary)',
      color: 'var(--on-primary)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--on-surface)',
      borderColor: 'var(--outline-variant)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--primary)',
      border: 'none',
      padding: '8px 16px',
    }
  };

  return (
    <button 
      className={`btn-base ${className}`}
      style={{ ...baseStyle, ...variants[variant], ...style }} 
      {...props}
    >
      {children}
    </button>
  );
}
