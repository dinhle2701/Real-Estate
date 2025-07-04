import React from 'react'

const Discover = () => {
    return (
        <div className='discover'>
            <section className="py-20 px-4 md:px-20 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left: Google Map */}
                    <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.063337488665!2d106.69780041462233!3d10.806251961640336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ce7a8cf1a1%3A0xd0a9c84eac647e63!2zQ8O0bmcgVHkgVG4gQW4gVHLhuqduZyBUaMawxqFuZyBOaOG6rXQgQ2hpIFbhuq10IE5hbQ!5e0!3m2!1sen!2s!4v1644297303566!5m2!1sen!2s"
                            className="w-full h-full"
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Right: Text Content */}
                    <div className="text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Discover Perfect Locations
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Explore neighborhoods, cities, and homes that fit your lifestyle. Our integrated map experience helps you discover places that suit your preferences with ease.
                        </p>
                        <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition">
                            View Locations →
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Discover
