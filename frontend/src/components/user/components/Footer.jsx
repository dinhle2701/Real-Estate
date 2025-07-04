'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800">

      {/* PHẦN BANNER HÌNH ẢNH */}
      <div
        className="relative h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: "url('https://www.shutterstock.com/image-illustration/3d-rendering-modern-cozy-house-600nw-1699684264.jpg')" }} // 🔁 Thay bằng đường dẫn ảnh bạn có
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Make Your Dream <br /> Property a Reality?
        </h2>
        <p className="text-sm md:text-base mb-6 max-w-xl">
          Explore a curated selection of properties that align with your vision and goals.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transitionn hover:cursor-pointer">
          Get Started →
        </button>
      </div>

      {/* PHẦN NỘI DUNG CHÍNH */}
      <div className="px-6 md:px-20 py-10 grid md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-bold mb-2">
            Discover Nature’s <span className="text-black">Wonders</span>
          </h2>
          <p className="text-lg text-gray-600">with Expert Guidance</p>
        </div>
        <div />
        <div className="text-sm text-gray-700">
          <p>12345, Gazipur, Dhaka, Road, Bangladesh.</p>
          <p className="mt-2 font-semibold">(+1)839-849-8483</p>
        </div>
      </div>

      <div className="border-t border-gray-200" />

      {/* PHẦN LIÊN KẾT */}
      <div className="px-6 md:px-20 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <div className="flex gap-6 flex-wrap justify-center md:justify-start">
          <Link href="#" className="hover:underline">Home</Link>
          <Link href="#" className="hover:underline">About</Link>
          <Link href="#" className="hover:underline">Properties</Link>
          <Link href="#" className="hover:underline">Services</Link>
        </div>

        <div className="font-bold text-xl mt-4 md:mt-0">EverGreen</div>

        <div className="flex gap-6 flex-wrap justify-center md:justify-end mt-4 md:mt-0">
          <Link href="#" className="hover:underline">Gallery</Link>
          <Link href="#" className="hover:underline">FAQ</Link>
          <Link href="#" className="hover:underline">Pricing</Link>
          <Link href="#" className="hover:underline">Contact</Link>
        </div>
      </div>

      <div className="border-t border-gray-200" />

      {/* PHẦN COPYRIGHT */}
      <div className="px-6 md:px-20 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <p>© 2025 EverGreen. All rights reserved.</p>
        <div className="mt-2 md:mt-0">
          <Link href="#" className="hover:underline">Terms & Conditions</Link>
          <span className="mx-2">|</span>
          <Link href="#" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
