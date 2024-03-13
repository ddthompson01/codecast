"use client";

import { useState, useEffect } from 'react';
import LiveKitStream from '@/components/livekitStream';
import { useUser } from '@clerk/nextjs';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
function DashboardPage() {
    const [isLive, setIsLive] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const {user} = useUser();

    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch('/api/fetchCategories');
            const data = await response.json();
            console.log(data);
            setCategories(data);
        }
        fetchCategories();
    }, []);

    const toggleLiveStatus = async () => {
        const newIsLiveStatus = !isLive;
    
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
    
        setIsLive(newIsLiveStatus);
    };
    

    const handleCategorySelect = async (category) => {
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
                    <DropdownMenuTrigger className="bg-green-400 rounded-lg shadow-lg py-2">{selectedCategory ? selectedCategory.name : 'Select a Category'}</DropdownMenuTrigger>
                    <DropdownMenuContent >
                        <DropdownMenuLabel>Categories</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                                    {categories.map((category) => (
                                        <DropdownMenuItem key={category.id} onClick={() => handleCategorySelect(category)}>{category.name}</DropdownMenuItem>
                                    ))}
                    </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <br></br>
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
