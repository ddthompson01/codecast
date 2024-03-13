"use client";

import { useState } from 'react';
import LiveKitStream from '@/components/livekitStream';
import { useUser } from '@clerk/nextjs';

function DashboardPage() {
    const [isLive, setIsLive] = useState(false);
    const {user} = useUser();

    const toggleLiveStatus = async () => {
        const newIsLiveStatus = !isLive;
        setIsLive(newIsLiveStatus);
    };

    if (!user) {
        return;
    }

    return (
        <div>
            <LiveKitStream
                room={user?.username + "'s stream"}
                isLive={isLive}
                style={{ width: '800px', height: '450px' }} // Adjust dimensions as needed
            />
            <div className='mt-20'>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={toggleLiveStatus}
                >
                    {isLive ? 'End Live' : 'Go Live'}
                </button>
            </div>
        </div>
    );
}

export default DashboardPage;
