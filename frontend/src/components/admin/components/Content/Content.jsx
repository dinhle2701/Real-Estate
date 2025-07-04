import React from 'react'
// import { Outlet } from 'react-router-dom';

export default function Content({ children }) {
    return (
        <div className="admin-content p-6">
            {/* Bạn có thể thêm sidebar, navbar, v.v. ở đây */}
            {children}
        </div>
    );
}