"use client"

import { useState, useEffect } from 'react';

export default function JavaPage() {
    const [streams, setStreams] = useState([]);

    useEffect(() => {
        async function fetchStreams() {
            const response = await fetch('/api/fetchStreams?categoryName=Java');
            const data = await response.json();
            console.log(data);
            setStreams(data);
        }

        fetchStreams();
    }, []);

    return (
        <div className="ml-8 lg:ml-20">
            <h1 className="text-2xl font-semibold lg:text-4xl">Java Streams</h1>
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
                <p>No current streams under the Java category.</p>
            )}
        </div>
    );
}
