"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PythonPage() {
    const [streams, setStreams] = useState([]);

    useEffect(() => {
        async function fetchStreams() {
            const response = await fetch('/api/fetchStreams?categoryName=Python');
            const data = await response.json();
            setStreams(data);
        }

        fetchStreams();
    }, []);

    return (
        <div className="ml-8 lg:ml-20">
            <h1 className="text-2xl font-semibold lg:text-4xl">Python Streams</h1>
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
                <p>No current streams under the Python category.</p>
            )}
        </div>
    );
}