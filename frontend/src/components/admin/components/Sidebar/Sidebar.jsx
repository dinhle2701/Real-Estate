'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fence, Store, BellRing, User, LogOut, ChartArea, Settings, MessageCircleMore } from 'lucide-react';

export default function Sidebar() {
    const router = useRouter();

    const handleLogout = () => {
        const confirmed = window.confirm("Bạn có chắc chắn muốn đăng xuất không?");
        if (confirmed) {
            localStorage.removeItem('token');
            // Nếu bạn có dùng context thì gọi setUser(null) ở đây
            router.push('/');
        }
    };

    return (
        <div className="admin-sidebar sticky top-0 h-screen bg-white p-6 shadow-lg flex flex-col">
            {/* Logo */}
            <Link href="/admin" className="mx-auto text-decoration-none">
                <h1 className="flex items-center gap-2 text-2xl font-bold text-gray-800 mb-10 p-3 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Store className="w-6 h-6 text-green-600" />
                    <span>
                        <span className="text-green-600">EverGreen</span>
                    </span>
                </h1>
            </Link>

            {/* Navigation */}
            <nav className="navigate flex flex-col gap-3">
                <Link
                    href="/admin/property"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 text-base font-medium hover:bg-green-100 hover:text-green-700 transition-all duration-200"
                >
                    <Fence className="w-5 h-5" />
                    <strong>Property</strong>
                </Link>

                <Link
                    href="/admin/users"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 text-base font-medium hover:bg-green-100 hover:text-green-700 transition-all duration-200"
                >
                    <User className="w-5 h-5" />
                    <strong>User</strong>
                </Link>

                <Link
                    href="/admin/notification"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 text-base font-medium hover:bg-green-100 hover:text-green-700 transition-all duration-200"
                >
                    <BellRing className="w-5 h-5" />
                    <strong>Notification</strong>
                </Link>

                <Link
                    href="/admin/messages"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 text-base font-medium hover:bg-green-100 hover:text-green-700 transition-all duration-200"
                >
                    <MessageCircleMore className="w-5 h-5" />
                    <strong>Messages</strong>
                </Link>

                <Link
                    href="/admin/statistical"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 text-base font-medium hover:bg-green-100 hover:text-green-700 transition-all duration-200"
                >
                    <ChartArea className="w-5 h-5" />
                    <strong>Statistical</strong>
                </Link>

                <Link
                    href="/admin/settings"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 text-base font-medium hover:bg-green-100 hover:text-green-700 transition-all duration-200"
                >
                    <Settings className="w-5 h-5" />
                    <strong>Settings</strong>
                </Link>


            </nav>

            {/* Logout button at bottom */}
            <div className="logout mt-auto pt-4 border-t">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-red-600 font-semibold hover:bg-red-100 transition-all duration-200"
                >
                    <LogOut className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </div>
    );
}
