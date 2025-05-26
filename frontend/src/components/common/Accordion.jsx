import React from 'react';

const Accordion = ({
    title,
    icon,
    isExpanded,
    onToggle,
    children,
}) => {
    return (
        <div className="bg-white rounded-lg shadow">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-4 text-left"
            >
                <div className="flex items-center space-x-3">
                    {icon && (
                        <span className="text-gray-400">
                            {icon}
                        </span>
                    )}
                    <span className="text-sm font-medium text-gray-900">{title}</span>
                </div>
                <svg
                    className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isExpanded && (
                <div className="p-4 border-t border-gray-200">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion; 