'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useRegister } from '../../query/auth'; // Hook gọi API
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

export default function page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });
  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const registerMutation = useRegister();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const usernameRegex = /^[a-zA-Z ]{3,24}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]{4,}@gmail\.com$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*_]{8,16}$/;

  const validateField = (name, value) => {
    let error = '';

    if (name === 'username') {
      if (!value.trim()) {
        error = 'Please insert username';
      } else if (!usernameRegex.test(value)) {
        error = 'Username must be 3–24 letters and spaces.';
      }
    }

    if (name === 'email') {
      if (!value.trim()) {
        error = 'Please insert email';
      } else if (!emailRegex.test(value)) {
        error = "Email must be like 'abc@gmail.com'";
      }
    }

    if (name === 'password') {
      if (!value.trim()) {
        error = 'Please insert password';
      } else if (!passwordRegex.test(value)) {
        error = 'Password must be 8-16 characters with uppercase, lowercase, and number.';
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);
    setFormErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const newErrors = {};
    let isValid = true;

    if (!formData.username.trim()) {
      newErrors.username = 'Please insert username';
      isValid = false;
    } else if (!usernameRegex.test(formData.username)) {
      newErrors.username = 'Username must be 3-24 letters long and only contain letters and spaces.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please insert email';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email must be like 'abc@gmail.com'";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Please insert password';
      isValid = false;
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be 8-16 characters with uppercase, lowercase, and number.';
      isValid = false;
    }

    if (!isValid) {
      setFormErrors(newErrors);
      return;
    }

    registerMutation.mutate(formData, {
      onSuccess: () => {
        toast.success('Register successfully!', { autoClose: 1500 });
        setTimeout(() => {
          router.push('/login'); // dùng router.push thay cho navigate
        }, 2000);
      },
      onError: (error) => {
        const fieldErrors = error.response?.data?.errors;
        if (fieldErrors) {
          setFormErrors(prev => ({
            ...prev,
            ...fieldErrors
          }));
        } else {
          const msg = error.response?.data?.message || "Register failed!";
          toast.error(msg, { autoClose: 2000 });
        }
      }
    });
  };

  return (
    <div className="signup">
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <ToastContainer />
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Register</h2>
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded outline-none ${formErrors.username ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Your name"
              />
              {formErrors.username && <p className="text-red-500 text-sm mt-1">{formErrors.username}</p>}
            </div>

            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded outline-none ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="abc@gmail.com"
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
            </div>

            <div>
              <label className="block font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full border px-3 py-2 rounded pr-10 outline-none ${formErrors.password ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your password"
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
                  tabIndex={-1}
                >
                  {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                </button>
              </div>
              {formErrors.password && <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded hover:cursor-pointer"
                disabled={registerMutation.isLoading}
              >
                {registerMutation.isLoading ? 'Registering...' : 'Register'}
              </button>
            </div>

            <p className="text-center mt-3 text-sm text-gray-700">
              Have an account?
              <Link href="/login" className="text-green-600 hover:underline ml-1">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
