import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-[#f2f4f5]">
            {/* Mobile sidebar backdrop */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-20 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed inset-y-0 left-0 z-30 w-64 transform transition-transform duration-200 ease-in-out
                lg:relative lg:translate-x-0 lg:z-0
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 relative">
                <Navbar onMenuClick={toggleSidebar} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#f2f4f5]">
                    <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>

                {/* AI Chat - Positioned absolutely within the main content area */}
                <div className="absolute bottom-0 right-0 w-96 mr-6 mb-6">
                    {/* This div will be replaced by the AiChat component in App.jsx */}
                </div>
            </div>
        </div>
    );
};

export default Layout; 