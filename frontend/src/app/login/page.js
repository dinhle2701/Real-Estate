'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLogin } from '@/query/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from 'jwt-decode';
import { useUser } from '@/context/UserContext/UserContext';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Link from 'next/link';

export default function page() {
  const router = useRouter();
  const { setUser } = useUser();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const loginMutation = useLogin();

  const emailRegex = /^[a-zA-Z0-9._%+-]{4,}@gmail\.com$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*_]{8,24}$/;

  const validateField = (name, value) => {
    let error = '';
    if (name === 'email') {
      if (!value.trim()) error = 'Please insert email';
      else if (!emailRegex.test(value)) error = "Invalid email format. Email must be like 'abc@gmail.com'";
    }
    if (name === 'password') {
      if (!value.trim()) error = 'Please insert password';
      else if (!passwordRegex.test(value)) error = 'Password must be 8-24 characters with uppercase, lowercase, and number.';
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const errors = {
      email: validateField('email', formData.email),
      password: validateField('password', formData.password)
    };

    setFormErrors(errors);
    if (errors.email || errors.password) return;

    loginMutation.mutate(formData, {
      onSuccess: (data) => {
        localStorage.setItem('token', data.token);
        const decodedToken = jwtDecode(data.token);
        setUser(decodedToken);
        toast.success('Login Successful!', { position: 'top-right', autoClose: 500 });

        setTimeout(() => {
          const redirectPath = decodedToken.role === 'admin'
            ? '/admin'
            : decodedToken.role === 'user'
              ? '/'
              : '/user';
          router.push(redirectPath);
        }, 1500);
      },
      onError: (error) => {
        console.error("🔥 Axios full error:", error);

        // Lấy thông điệp lỗi từ response hoặc mặc định
        const errorMessage = error?.response?.data?.message || "Something went wrong";
        const statusCode = error?.response?.status;

        // Lowercase message để dễ kiểm tra
        const msg = errorMessage.toLowerCase();

        // Reset lỗi
        setFormErrors({ email: '', password: '' });

        // Bắt các lỗi phổ biến
        if ([401, 404].includes(statusCode)) {
          if (msg.includes('email') || msg.includes('tài khoản')) {
            setFormErrors(prev => ({ ...prev, email: errorMessage }));
          } else if (msg.includes('password') || msg.includes('mật khẩu')) {
            setFormErrors(prev => ({ ...prev, password: errorMessage }));
          } else {
            setFormErrors(prev => ({ ...prev, email: errorMessage }));
          }
        } else if (statusCode >= 500) {
          toast.error("🚨 Server Error. Please try again later.", { autoClose: 2000 });
        } else if (statusCode === 0 || !statusCode) {
          toast.error("❌ Cannot connect to server. Check your network or CORS.", { autoClose: 2000 });
        } else {
          toast.error("❗ Error: " + errorMessage, { autoClose: 2000 });
        }
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <ToastContainer />
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-1 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
              placeholder="abc@gmail.com"
            />
            {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 mt-1 border ${formErrors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
              </button>
            </div>
            {formErrors.password && <p className="mt-1 text-sm text-red-500">{formErrors.password}</p>}
          </div>

          {/* Submit */}
          <div className="flex flex-col items-center">
            <button
              type="submit"
              disabled={loginMutation.isLoading}
              className="w-1/2 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none hover:cursor-pointer"
            >
              {loginMutation.isLoading ? 'Logging in...' : 'Login'}
            </button>
            <Link href="/register" className="mt-3 text-green-600 hover:underline text-sm">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
