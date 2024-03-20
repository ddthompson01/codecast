"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link'; 

export default function CPlusPlusPage() {
    const [streams, setStreams] = useState([]);
    const categoryName = "C++";
    const encodedCategoryName = encodeURIComponent(categoryName);

    useEffect(() => {
        async function fetchStreams() {
            const response = await fetch(`/api/fetchStreams?categoryName=${encodedCategoryName}`);
            const data = await response.json();
            setStreams(data);
        }

        fetchStreams();
    }, []);

    return (
        <div className="bg-[#0D1520] min-h-screen flex flex-col items-center pt-16 text-white">
            <h1 className="text-2xl font-semibold lg:text-4xl mb-8">C++ Streams</h1>
            <div className="w-full max-w-4xl px-4">
                {streams.length > 0 ? (
                    streams.map((stream) => (
                        <div key={stream.id} className="mb-4">
                            <Link href={`/${stream.user.username}`}>
                                <a className="text-lg font-medium hover:underline">{stream.name}</a>
                            </Link>
                            {/* Display other stream details here, styled similarly */}
                        </div>
                    ))
                ) : (
                    <p>No current streams under the C++ category.</p>
                )}
            </div>
        </div>
    );
}
