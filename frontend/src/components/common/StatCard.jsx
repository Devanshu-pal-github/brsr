import React from 'react';

const StatCard = ({
    title,
    value,
    className = '',
    valueClassName = '',
}) => {
    return (
        <div className={`card ${className}`}>
            <h3 className="text-muted">{title}</h3>
            <p className={`mt-2 text-2xl font-semibold ${valueClassName || 'text-heading'}`}>
                {value}
            </p>
        </div>
    );
};

export default StatCard; 