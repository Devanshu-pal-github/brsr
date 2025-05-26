import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../components/common/DataTable';
import DonutChart from '../components/common/DonutChart';
import Accordion from '../components/common/Accordion';

const WorkforceDetails = () => {
    const [activeTab, setActiveTab] = useState('workforce-details');
    const [expandedSection, setExpandedSection] = useState('employees-workers');

    const tabs = [
        { id: 'workforce-details', label: 'Workforce Details' },
        { id: 'employee-wellbeing', label: 'Employee Well-being' },
        { id: 'human-rights', label: 'Human Rights' },
    ];

    const employeeColumns = [
        { key: 'category', label: 'Category' },
        { key: 'maleNo', label: 'Male No.', align: 'right' },
        { key: 'femaleNo', label: 'Female No.', align: 'right' },
    ];

    const employeeData = [
        { category: 'Permanent', maleNo: 0, femaleNo: 0 },
        { category: 'Other than Permanent', maleNo: 0, femaleNo: 0 },
        { category: 'Total Employees', maleNo: 0, femaleNo: 0 },
    ];

    const handleEdit = (section) => {
        console.log('Edit clicked for:', section);
    };

    const toggleSection = (sectionId) => {
        setExpandedSection(expandedSection === sectionId ? null : sectionId);
    };

    // Icons for sections
    const icons = {
        employees: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        differently: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        participation: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        turnover: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    };

    return (
        <div className="min-h-screen bg-gray-50 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Link to="/workforce" className="hover:text-gray-700">Workforce</Link>
                    <span className="mx-2">›</span>
                    <span className="text-gray-900">Workforce Details</span>
                </div>

                <div className="bg-white rounded-lg shadow">
                    {/* Header with Tabs */}
                    <div className="border-b border-gray-200">
                        <div className="px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-8">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`py-4 px-1 border-b-2 font-medium text-sm ${
                                                activeTab === tab.id
                                                    ? 'border-blue-600 text-blue-600'
                                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            }`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex items-center text-sm">
                                    <span className="text-gray-500">Q.s covered</span>
                                    <span className="ml-2 font-medium text-gray-900">14/20</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
                        {/* Employees and Workers Details */}
                        <Accordion
                            title="Employees and Workers Details"
                            icon={icons.employees}
                            isExpanded={expandedSection === 'employees-workers'}
                            onToggle={() => toggleSection('employees-workers')}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <DataTable
                                    title="Employees"
                                    columns={employeeColumns}
                                    data={employeeData}
                                    onEdit={() => handleEdit('employees')}
                                />
                                <DataTable
                                    title="Workers"
                                    columns={employeeColumns}
                                    data={employeeData}
                                    onEdit={() => handleEdit('workers')}
                                />
                            </div>
                            <div className="mt-6 flex justify-center">
                                <DonutChart
                                    percentage={75}
                                    label="Male/Female ratio"
                                    size="md"
                                    color="blue"
                                />
                            </div>
                        </Accordion>

                        {/* Differently Abled Employees and Workers */}
                        <Accordion
                            title="Differently Abled Employees and Workers"
                            icon={icons.differently}
                            isExpanded={expandedSection === 'differently-abled'}
                            onToggle={() => toggleSection('differently-abled')}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <DataTable
                                    title="Employees"
                                    columns={employeeColumns}
                                    data={employeeData}
                                    onEdit={() => handleEdit('differently-abled-employees')}
                                />
                                <DataTable
                                    title="Workers"
                                    columns={employeeColumns}
                                    data={employeeData}
                                    onEdit={() => handleEdit('differently-abled-workers')}
                                />
                            </div>
                            <div className="mt-6 flex justify-center">
                                <DonutChart
                                    percentage={65}
                                    label="Inclusion ratio"
                                    size="md"
                                    color="green"
                                />
                            </div>
                        </Accordion>

                        {/* Participation/Inclusion of Women */}
                        <Accordion
                            title="Participation/Inclusion of Women"
                            icon={icons.participation}
                            isExpanded={expandedSection === 'participation-inclusion'}
                            onToggle={() => toggleSection('participation-inclusion')}
                        >
                            <DataTable
                                title="Inclusion Table"
                                columns={[
                                    { key: 'category', label: 'Category' },
                                    { key: 'totalNo', label: 'Total No.', align: 'right' },
                                    { key: 'femaleNo', label: 'Female No.', align: 'right' },
                                ]}
                                data={[
                                    { category: 'Board of Directors', totalNo: 0, femaleNo: 0 },
                                    { category: 'Key Management Personnel', totalNo: 0, femaleNo: 0 },
                                ]}
                                onEdit={() => handleEdit('inclusion')}
                            />
                        </Accordion>

                        {/* Turnover rate */}
                        <Accordion
                            title="Turnover rate"
                            icon={icons.turnover}
                            isExpanded={expandedSection === 'turnover-rate'}
                            onToggle={() => toggleSection('turnover-rate')}
                        >
                            <DataTable
                                title="FY 2023-24"
                                columns={[
                                    { key: 'category', label: 'Category' },
                                    { key: 'maleNo', label: 'Male No.', align: 'right' },
                                    { key: 'femaleNo', label: 'Female No.', align: 'right' },
                                    { key: 'totalNo', label: 'Total', align: 'right' },
                                ]}
                                data={[
                                    { category: 'Permanent', maleNo: 0, femaleNo: 0, totalNo: 0 },
                                    { category: 'Other than Permanent', maleNo: 0, femaleNo: 0, totalNo: 0 },
                                    { category: 'Total', maleNo: 0, femaleNo: 0, totalNo: 0 },
                                ]}
                                onEdit={() => handleEdit('turnover')}
                            />
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkforceDetails; 