import React, { useState } from 'react';

const Navbar = ({ onMenuClick }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Left side */}
                    <div className="flex items-center space-x-4">
                        {/* Mobile menu button */}
                        <button
                            onClick={onMenuClick}
                            type="button"
                            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Year selector */}
                        <div className="flex items-center space-x-2">
                            <select className="text-sm font-medium text-gray-900 bg-transparent pr-8 py-2 appearance-none cursor-pointer">
                                <option>FY 2023-24</option>
                                <option>FY 2022-23</option>
                                <option>FY 2021-22</option>
                            </select>
                            <svg className="w-5 h-5 text-gray-400 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center space-x-4">
                        {/* Notification Bell */}
                        <button className="relative p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>

                        {/* Profile */}
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center space-x-3"
                            >
                                <img
                                    src="https://ui-avatars.com/api/?name=John+Doe&background=e5e7eb"
                                    alt="Profile"
                                    className="h-8 w-8 rounded-full"
                                />
                                <span className="text-sm font-medium text-gray-700">John Doe</span>
                                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                                    <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                                    <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                                    <a href="#signout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 