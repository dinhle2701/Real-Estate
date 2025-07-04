// app/admin/layout.js
'use client';
import Sidebar from '@/components/admin/components/Sidebar/Sidebar';
import React from 'react';

export default function AdminLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar bên trái */}
            <div className="w-64 bg-white">
                <Sidebar />
            </div>

            {/* Nội dung bên phải */}
            <div className="flex-1 p-6 bg-gray-50">
                {children}
            </div>
        </div>
    );
}
