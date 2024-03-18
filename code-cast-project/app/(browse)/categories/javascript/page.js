"use client"

import { useState, useEffect } from 'react';

export default function JavaScriptPage() {
    const [streams, setStreams] = useState([]);

    useEffect(() => {
        async function fetchStreams() {
            const response = await fetch('/api/fetchStreams?categoryName=JavaScript');
            const data = await response.json();
            setStreams(data);
        }

        fetchStreams();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-semibold lg:text-4xl">JavaScript Streams</h1>
            {streams.length > 0 ? (
                streams.map((stream) => (
                    <div key={stream.id}>
                        <Link href={`/${stream.user.username}`}>
                            <h2>{stream.name}</h2>
                        </Link>
                        {/* Display other stream details here */}
                    </div>
                ))
            ) : (
                <p>No current streams under the JavaScript category.</p>
            )}
        </div>
    );
}