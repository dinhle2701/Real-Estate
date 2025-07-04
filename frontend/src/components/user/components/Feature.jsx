import React from 'react'

const Feature = () => {
    return (
        <div className='feature'>
            <section className="h-dvh py-20 px-4 md:px-20 bg-white">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-semibold max-w-3xl mb-10 leading-snug">
                    Your primary home might begin to feel left out.
                </h2>

                {/* Top Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Left: Main Image */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <img
                            src="/images/house1.jpg"
                            alt="house"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 right-4 flex gap-2">
                            {['thumb1.jpg', 'thumb2.jpg', 'thumb3.jpg'].map((img, i) => (
                                <img
                                    key={i}
                                    src={`/images/${img}`}
                                    alt="thumb"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Middle: Text Block */}
                    <div className="bg-gray-100 rounded-2xl p-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold mb-2">Big things can happen in small spaces.</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            With thoughtful design and smart organization, you can maximize every inch, making room for creativity
                        </p>
                        <button className="bg-white border px-4 py-2 rounded-full w-fit text-sm hover:bg-gray-200 transition">
                            Details
                        </button>
                    </div>

                    {/* Right: Price Box */}
                    <div className="rounded-2xl overflow-hidden shadow-md bg-white">
                        <img src="/images/house2.jpg" alt="house small" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <p className="text-sm text-gray-600 mb-2">Pricing Start at <span className="font-semibold text-black">$256K</span></p>
                            <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 flex items-center gap-2">
                                Explore Properties <span>→</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Description + Navigation */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                    <p className="text-sm text-gray-600 max-w-2xl">
                        Whether it's creating a cozy corner for relaxation or transforming a small area into a workspace
                    </p>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-full border hover:bg-gray-100">←</button>
                        <button className="p-2 rounded-full border hover:bg-gray-100">→</button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: '100%', label: 'Satisfactions Clients' },
                        { value: '500+', label: 'Property sells' },
                        { value: '150+', label: 'Countries & Cities' },
                        { value: '2,00+', label: 'Positive reviews' },
                    ].map(({ value, label }, idx) => (
                        <div key={idx}>
                            <h4 className="text-2xl font-bold">{value}</h4>
                            <p className="text-sm text-gray-600 mt-1">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Feature
