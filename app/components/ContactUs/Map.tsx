import React from 'react'

const Map = () => {
    return (
        <a
            href="https://www.google.com/maps/dir/?api=1&destination=Riyadh,Saudi+Arabia"
            target="_blank"
            rel="noopener noreferrer"
            className="block lg:col-span-2 relative h-[450px] rounded-2xl overflow-hidden border border-border-dark bg-card-dark group cursor-pointer"
        >
            {/* Map */}
            <div className="absolute inset-0 grayscale opacity-70 group-hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps?q=Riyadh%2C%20Saudi%20Arabia&output=embed"
                    className="w-full h-full pointer-events-none"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 bg-black/50 mix-blend-overlay" />
            </div>

            {/* Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <div className="relative">
                    <div className="absolute -inset-4 bg-primary/20 rounded-full animate-pulse" />
                    <span className="material-symbols-outlined text-primary text-5xl relative z-10">
                        location_on
                    </span>
                </div>
            </div>


        </a>

    )
}

export default Map