import React from 'react'

const properties = [
    {
        id: 1,
        image: '/images/house1.jpg',
        title: 'The Pinnacle at Highland Park',
        bedrooms: 5,
        bathrooms: 2,
        price: '$3,56798.00',
        address: '123 Maple Street, New York',
    },
    {
        id: 2,
        image: '/images/house2.jpg',
        title: 'The Pinnacle at Highland Park',
        bedrooms: 5,
        bathrooms: 2,
        price: '$2,49089.99',
        address: '789 Forest Lane, Denver, CO',
    },
    {
        id: 3,
        image: '/images/house3.jpg',
        title: 'The Pinnacle at Highland Park',
        bedrooms: 5,
        bathrooms: 2,
        price: '$4,56745.00',
        address: '123 Serenity Drive, Austin, TX',
    },
    {
        id: 4,
        image: '/images/house4.jpg',
        title: 'The Pinnacle at Highland Park',
        bedrooms: 5,
        bathrooms: 2,
        price: '$3,94000.00',
        address: '912 Hillcrest Ave, Seattle, WA',
    },
    {
        id: 5,
        image: '/images/house5.jpg',
        title: 'The Pinnacle at Highland Park',
        bedrooms: 5,
        bathrooms: 2,
        price: '$2,80000.00',
        address: '245 Oak Drive, Portland, OR',
    },
    {
        id: 6,
        image: '/images/house6.jpg',
        title: 'The Pinnacle at Highland Park',
        bedrooms: 5,
        bathrooms: 2,
        price: '$4,32000.00',
        address: '67 River Bend Rd, Miami, FL',
    },
];

export default function PropertyGridSection() {
    return (
        <section className="py-20 px-4 md:px-20 bg-white">
            {/* Title */}
            <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-2">Explore our premier houses</h2>
                    <p className="text-gray-600 text-sm max-w-xl">
                        Each listing offers unique features, exceptional quality, and prime locations, ensuring an exclusive living experience.*
                    </p>
                </div>
                <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800">
                    See All Properties →
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {properties.map((prop) => (
                    <div key={prop.id} className="rounded-2xl overflow-hidden bg-white shadow hover:shadow-xl transition hover:cursor-pointer">
                        <div className="relative">
                            <img src={prop.image} alt={prop.title} className="w-full h-120 object-cover" />
                            <span className="absolute top-3 left-3 bg-white text-xs font-medium px-3 py-2 rounded-full shadow">
                                For Sale
                            </span>
                        </div>
                        <div className="p-4">
                            <div className="text-sm text-gray-500 flex gap-4 mb-1">
                                <span>🛏 {prop.bedrooms} Bedrooms</span>
                                <span>🛁 {prop.bathrooms} Bathroom</span>
                            </div>
                            <h3 className="font-semibold text-lg mb-1">{prop.title}</h3>
                            <p className="text-sm text-gray-700 mb-1">{prop.price}</p>
                            <p className="text-sm text-gray-400">{prop.address}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}