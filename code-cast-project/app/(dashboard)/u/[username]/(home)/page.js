"use client";

import LiveKitStream from '@/components/livekitStream';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

function DashboardPage() {
    const [isLive, setIsLive] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { user } = useUser();

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch('/api/fetchCategories');
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
                // Optionally, update the UI to indicate the error to the user
            }
        }
        fetchCategories();
    }, []);

    const toggleLiveStatus = async () => {
        const newIsLiveStatus = !isLive;
        try {
            if (newIsLiveStatus && selectedCategory) {
                // Update the stream's category only when going live and a category is selected
                await fetch('/api/updateStreamCategory', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: user.username + "'s stream", categoryId: selectedCategory.id }),
                });
            } else if (!newIsLiveStatus) {
                // Update the stream's categoryId to null when the stream ends
                await fetch('/api/updateStreamCategory', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: user.username + "'s stream", categoryId: null }),
                });
            }
        } catch (error) {
            console.error('Error toggling live status:', error);
            // Optionally, update the UI to indicate the error to the user
        }

        setIsLive(newIsLiveStatus);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    // if user cannot be found, return null
    if (!user) {
        return null;
    }

    return (
        <div>
            <LiveKitStream
                room={user?.username + "'s stream"}
                isLive={isLive}
                style={{ width: '800px', height: '450px' }} // Adjust dimensions as needed
            />
            <div className='mt-20'>
                <div>
                    <DropdownMenu >
                        <DropdownMenuTrigger className="bg-green-400 rounded-lg shadow-lg py-2">
                            {selectedCategory ? selectedCategory.name : 'Select a Category'}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Categories</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {categories.map((category) => (
                                <DropdownMenuItem key={category.id} onClick={() => handleCategorySelect(category)}>
                                    {category.name}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <br />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={toggleLiveStatus}
                    disabled={!selectedCategory}
                >
                    {isLive ? 'End Live' : 'Go Live'}
                </button>
            </div>
        </div>
    );
}

export default DashboardPage;
