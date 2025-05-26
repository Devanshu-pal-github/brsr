import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    icon = null,
    onClick,
    disabled = false,
    type = 'button',
    ...props
}) => {
    const variantClass = variant === 'outline' ? 'btn-outline' : 'btn-primary';
    
    return (
        <button
            type={type}
            className={`${variantClass} ${className}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

export default Button; 