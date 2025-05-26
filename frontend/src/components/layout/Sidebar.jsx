import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Menu items configuration
const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', path: '/' },
    { id: 'entity', label: 'Entity Details', icon: '🏢', path: '/entity' },
    { id: 'workforce', label: 'Workforce', icon: '👥', path: '/workforce' },
    { id: 'environment', label: 'Environment', icon: '🌍', path: '/environment' },
    { id: 'finance', label: 'Finance', icon: '💰', path: '/finance' },
    { id: 'compliance', label: 'Compliance', icon: '✓', path: '/compliance' },
    { id: 'reports', label: 'Reports', icon: '📝', path: '/reports' },
];

const Sidebar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <aside className="w-64 bg-[#000d30] h-full">
            {/* Logo */}
            <div className="p-4">
                <Link to="/" className="flex items-center space-x-2">
                    <span className="text-2xl text-[#002a85]">⬡</span>
                    <span className="font-medium text-white">BRSR</span>
                </Link>
            </div>

            {/* Navigation Menu */}
            <nav className="mt-6">
                {menuItems.map((item) => (
                    <Link
                        key={item.id}
                        to={item.path}
                        className={`flex items-center px-4 py-2.5 text-sm ${
                            isActive(item.path)
                                ? 'bg-[#20305d] text-white border-l-4 border-[#002a85]'
                                : 'text-gray-400 hover:bg-[#20305d] hover:text-white'
                        }`}
                    >
                        <span className="text-xl mr-3">{item.icon}</span>
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar; 