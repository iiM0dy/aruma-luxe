import React from 'react';

const Loading = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Banner Placeholder */}
            <div className="mb-20 rounded-[2.5rem] overflow-hidden min-h-[400px] bg-white/5 animate-pulse flex items-center justify-center border border-white/5">
                <div className="max-w-3xl px-8 flex flex-col items-center gap-6">
                    <div className="h-1 w-12 bg-primary/20 rounded-full"></div>
                    <div className="h-16 w-96 bg-white/10 rounded-2xl"></div>
                    <div className="h-4 w-64 bg-white/5 rounded-full"></div>
                </div>
            </div>

            {/* Filters Placeholder */}
            <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="px-8 py-3.5 bg-white/5 border border-white/10 rounded-2xl min-w-[140px] h-12 animate-pulse"></div>
                ))}
            </div>

            {/* Products Grid Placeholder */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="flex flex-col gap-6">
                        <div className="aspect-4/5 bg-white/5 rounded-4xl border border-white/5 animate-pulse"></div>
                        <div className="flex flex-col gap-3 px-2">
                            <div className="flex justify-between items-start gap-4">
                                <div className="h-6 bg-white/10 rounded-lg w-2/3 animate-pulse"></div>
                                <div className="h-6 bg-primary/20 rounded-lg w-1/4 animate-pulse"></div>
                            </div>
                            <div className="h-4 bg-white/5 rounded-md w-full animate-pulse"></div>
                            <div className="h-4 bg-white/5 rounded-md w-4/5 animate-pulse"></div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Loading;
