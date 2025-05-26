import React from 'react';

const DonutChart = ({
    percentage,
    label,
    size = 'md',
    color = 'blue',
}) => {
    const sizeClasses = {
        sm: 'w-24 h-24',
        md: 'w-32 h-32',
        lg: 'w-40 h-40',
    };

    const colorClasses = {
        blue: {
            stroke: '#3B82F6',
            text: 'text-blue-600',
        },
        green: {
            stroke: '#10B981',
            text: 'text-green-600',
        },
        red: {
            stroke: '#EF4444',
            text: 'text-red-600',
        },
    };

    const selectedColor = colorClasses[color];

    return (
        <div className={`${sizeClasses[size]} relative`}>
            <svg className="w-full h-full" viewBox="0 0 36 36">
                {/* Background circle */}
                <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="3"
                />
                {/* Percentage circle */}
                <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={selectedColor.stroke}
                    strokeWidth="3"
                    strokeDasharray={`${percentage}, 100`}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-sm font-medium text-gray-900">{label}</div>
                    <div className={`text-2xl font-semibold ${selectedColor.text}`}>
                        {percentage}%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonutChart; 