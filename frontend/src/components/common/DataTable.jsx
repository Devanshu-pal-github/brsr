import React from 'react';

const DataTable = ({
    title,
    columns,
    data,
    onEdit,
    className = '',
}) => {
    return (
        <div className={className}>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-900">{title}</h3>
                {onEdit && (
                    <button 
                        onClick={onEdit}
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                        Edit
                    </button>
                )}
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className={`px-3 py-2 text-xs font-medium text-gray-500 ${
                                        column.align === 'right' ? 'text-right' : 'text-left'
                                    }`}
                                >
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column) => (
                                    <td
                                        key={`${rowIndex}-${column.key}`}
                                        className={`px-3 py-2 text-sm ${
                                            column.align === 'right' 
                                                ? 'text-right' 
                                                : 'text-left'
                                        } ${
                                            column.className || 'text-gray-900'
                                        }`}
                                    >
                                        {row[column.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable; 