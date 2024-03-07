"use client";

import { useState } from 'react';
import LiveKitStream from '@/components/livekitStream';

function DashboardPage() {
    const [isLive, setIsLive] = useState(false);

    const toggleLiveStatus = async () => {
        const newIsLiveStatus = !isLive;
        setIsLive(newIsLiveStatus);
    };

    return (
        <div>
            <LiveKitStream
                room="quickstart-room"
                isLive={isLive}
                style={{ width: '800px', height: '450px' }} // Adjust dimensions as needed
            />
            <div className='mt-32'>
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
