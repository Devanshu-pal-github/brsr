import React from 'react';
import StatCard from '../components/common/StatCard';
import Button from '../components/common/Button';

const Dashboard = () => {
    // Sample data - in real app, this would come from an API
    const stats = {
        totalFields: 103,
        completed: 76,
        pending: 27,
        completionRate: '74%',
        dueThisWeek: 12,
    };

    const departments = [
        { name: 'Admin', totalFields: 25, completed: 18 },
        { name: 'Environment', totalFields: 25, completed: 18 },
        { name: 'Legal', totalFields: 25, completed: 18 },
        { name: 'Workforce', totalFields: 25, completed: 18 },
        { name: 'Finance', totalFields: 25, completed: 18 },
    ];

    const recentUpdates = [
        { title: 'Workforce Details Updated', time: '2 hours ago' },
        { title: 'Environmental Metrics Added', time: '4 hours ago' },
        { title: 'Compliance Documents Updated', time: '6 hours ago' },
    ];

    const sections = [
        { section: 'Section A', progress: 90 },
        { section: 'Section B', progress: 85 },
        { section: 'Section C', progress: 95 },
    ];

    return (
        <div className="p-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-text-primary">BRSR Dashboard</h1>
            </div>

            {/* KPI Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                <StatCard title="Total Fields" value={stats.totalFields} />
                <StatCard title="Completed" value={stats.completed} valueClassName="text-status-success" />
                <StatCard title="Pending" value={stats.pending} valueClassName="text-status-warning" />
                <StatCard title="Completion Rate" value={stats.completionRate} valueClassName="text-primary" />
                <StatCard title="Due This Week" value={stats.dueThisWeek} valueClassName="text-status-error" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="outline">Generate Report</Button>
                <Button>View Analytics</Button>
                <Button variant="outline">Send Notification</Button>
                <Button>Edit Profile</Button>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Department Progress */}
                <div className="lg:col-span-8">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-lg font-semibold text-text-primary mb-6">Department Progress</h2>
                        <div className="space-y-4">
                            {departments.map((dept) => (
                                <div key={dept.name} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
                                    <div>
                                        <h3 className="text-sm font-medium text-text-primary">{dept.name}</h3>
                                        <div className="mt-1 flex items-center gap-4 text-sm text-text-muted">
                                            <span>Total Fields: {dept.totalFields}</span>
                                            <span>Completed: {dept.completed}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button className="text-primary hover:text-primary-hover">
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                            </svg>
                                        </button>
                                        <Button variant="outline" size="sm">Access Department</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                    {/* BRSR Completion Status */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-lg font-semibold text-text-primary mb-6">BRSR Completion Status</h2>
                        <div className="space-y-6">
                            {sections.map(({ section, progress }) => (
                                <div key={section} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">{section}</span>
                                        <span className="text-text-primary font-medium">{progress}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-primary transition-all duration-300 ease-in-out"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Updates */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-lg font-semibold text-text-primary mb-6">Recent Updates</h2>
                        <div className="space-y-4">
                            {recentUpdates.map((update, index) => (
                                <div key={index} className="border-l-4 border-primary pl-4 py-2">
                                    <h3 className="text-sm font-medium text-text-primary">{update.title}</h3>
                                    <p className="text-sm text-text-muted mt-1">{update.time}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard; 