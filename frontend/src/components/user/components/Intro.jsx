'use client';
import React from 'react';

export default function Intro() {
    return (
        <section
            className="relative h-screen pt-20 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/intro/image.png')" }}
        >
            <div className="absolute inset-0 bg-opacity-50 z-10" />

            <div className="relative z-20 h-full flex flex-col justify-center items-start px-4 sm:px-8 md:px-20 text-white">
                <div className="flex flex-wrap gap-2 mb-4">
                    {['House', 'Apartment', 'Residential'].map((type) => (
                        <span key={type} className="bg-white text-gray-600 px-5 py-2 rounded-full text-sm">
                            {type}
                        </span>
                    ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold max-w-xl md:max-w-2xl leading-tight mb-4">
                    Build Your Future, One Property at a Time.
                </h1>
                <p className="max-w-md md:max-w-lg text-white/80 text-sm sm:text-base">
                    Own Your World. One Property at a Time. Own Your World. One Property at a Time.
                </p>

                <div className="mt-8 w-full bg-white p-6 rounded-2xl shadow-lg">
                    <h2 className="text-xl font-semibold text-black mb-6">Find the best place</h2>

                    {/* Form Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Looking for</label>
                            <input
                                placeholder="Enter type"
                                className="w-full rounded-lg bg-gray-300 px-4 py-2 text-sm outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Price</label>
                            <select className="w-full rounded-lg bg-gray-300 px-4 py-2 text-sm outline-none">
                                <option>Price</option>
                                <option>$500+</option>
                                <option>$1000+</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Locations</label>
                            <select className="w-full rounded-lg bg-gray-300 px-4 py-2 text-sm outline-none">
                                <option>Location</option>
                                <option>New York</option>
                                <option>California</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Number of rooms</label>
                            <select className="w-full rounded-lg bg-gray-300 px-4 py-2 text-sm outline-none">
                                <option>2 Bed rooms</option>
                                <option>3 Bed rooms</option>
                                <option>4 Bed rooms</option>
                            </select>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="text-sm font-bold text-gray-700 mr-2">Filter:</span>
                        {['City', 'House', 'Residential', 'Apartment'].map((filter) => (
                            <span
                                key={filter}
                                className="px-4 py-1.5 bg-gray-100 rounded-full text-sm text-gray-800 cursor-pointer hover:bg-gray-200"
                            >
                                {filter}
                            </span>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="flex justify-end">
                        <button className="bg-black text-white text-sm px-6 py-2 rounded-full hover:bg-gray-900 hover:cursor-pointer">
                            Search Properties
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
