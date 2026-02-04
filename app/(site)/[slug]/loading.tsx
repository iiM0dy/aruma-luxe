import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12 animate-pulse">
                <div className="h-4 w-16 bg-white/10 rounded-md"></div>
                <div className="size-4 bg-white/5 rounded-full"></div>
                <div className="h-4 w-16 bg-white/10 rounded-md"></div>
                <div className="size-4 bg-white/5 rounded-full"></div>
                <div className="h-4 w-32 bg-primary/20 rounded-md"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Image Placeholder */}
                <div className="aspect-4/5 bg-white/5 rounded-4xl border border-white/5 animate-pulse"></div>

                {/* Content Placeholder */}
                <div className="flex flex-col justify-center gap-8">
                    <div className="space-y-4">
                        <div className="h-4 w-24 bg-primary/20 rounded-md animate-pulse"></div>
                        <div className="h-20 w-full bg-white/10 rounded-2xl animate-pulse"></div>
                        <div className="h-6 w-full bg-white/5 rounded-md animate-pulse"></div>
                        <div className="h-6 w-4/5 bg-white/5 rounded-md animate-pulse"></div>
                    </div>

                    <div className="h-40 w-full bg-white/5 rounded-4xl border border-white/5 animate-pulse"></div>

                    <div className="flex items-center gap-8 pt-8 border-t border-white/5">
                        <div className="flex flex-col gap-2">
                            <div className="h-4 w-12 bg-white/5 rounded-md"></div>
                            <div className="h-10 w-32 bg-primary/20 rounded-xl"></div>
                        </div>
                        <div className="h-16 flex-1 bg-primary/20 rounded-2xl"></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Loading;
