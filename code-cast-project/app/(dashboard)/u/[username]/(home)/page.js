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
import { toast } from 'sonner';

function DashboardPage() {
  const [isLive, setIsLive] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch('/api/fetchCategories');
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  const toggleLiveStatus = async () => {
    const newIsLiveStatus = !isLive;

    if (newIsLiveStatus && selectedCategory) {
      await fetch('/api/updateStreamCategory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: user.username + "'s stream", categoryId: selectedCategory.id }),
      });
    } else if (!newIsLiveStatus) {
      await fetch('/api/updateStreamCategory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: user.username + "'s stream", categoryId: null }),
      });
    }

    // have users select category before going live
    else if (!selectedCategory) {
      toast.error('Select a category!');
      return;
    }

    setIsLive(newIsLiveStatus);
  };

  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundColor: '#131F2F' }}>
      <LiveKitStream
        room={user?.username + "'s stream"}
        isLive={isLive}
        style={{ width: '800px', height: '450px' }}
      />
      <div className={`flex ${isLive ? 'justify-end' : 'justify-center'} items-center space-x-4 mt-10 w-full`}>
        {!isLive && (
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              {selectedCategory ? selectedCategory.name : 'Select a Category'}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categories.map((category) => (
                <DropdownMenuItem key={category.id} onClick={() => handleCategorySelect(category)}>{category.name}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        

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