"use client";

import { useState, useEffect } from 'react';
import LiveKitStream from '@/components/livekitStream';
import CalendarComponent from '../_components/CalendarComponent.jsx';





import { useUser } from '@clerk/nextjs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

function DashboardPage() {
  const [isLive, setIsLive] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showSchedule, setShowSchedule] = useState(false); 
  const { user } = useUser();
  const [events, setEvents] = useState([]); 

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
    } else if (!selectedCategory) {
      toast.error('Select a category!');
      return;
    }

    setIsLive(newIsLiveStatus);
  };

  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
  };

  const handleNavClick = (category) => {
    if (category === 'Schedule') {
      setShowSchedule(true); 
    } else {
      setShowSchedule(false); 
    }
  };

  const onSelectSlot = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  const onSelectEvent = (event) => {
    
  };

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#131F2F]">
      <LiveKitStream
        room={user?.username + "'s stream"}
        isLive={isLive}
        style={{ width: '800px', height: '450px' }}
      />
      <div className="mt-10 w-full px-4">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          {!isLive && (
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
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
          )}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={toggleLiveStatus}
          >
            {isLive ? 'End Live' : 'Go Live'}
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 w-full mx-auto mt-4" style={{ minHeight: '500px' }}>
        <div className="flex flex-col justify-start">
          <div className="flex items-center space-x-2">
            <span className="font-bold">{user.username}</span>
            <nav className="flex">
              <a href="#" className="text-gray-800 px-2 hover:underline" onClick={() => handleNavClick('Home')}>Home</a>
              <a href="#" className="text-gray-800 px-2 hover:underline" onClick={() => handleNavClick('About')}>About</a>
              <a href="#" className="text-gray-800 px-2 hover:underline" onClick={() => handleNavClick('Schedule')}>Schedule</a>
              <a href="#" className="text-gray-800 px-2 hover:underline" onClick={() => handleNavClick('Friends')}>Friends</a>
              <a href="#" className="text-gray-800 px-2 hover:underline" onClick={() => handleNavClick('Chat')}>Chat</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </nav>
          </div>
                    {showSchedule && (
                      <div className="mt-4">
                        <CalendarComponent
                          events={events}
                          onSelectSlot={onSelectSlot}
                          onSelectEvent={onSelectEvent}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          }

export default DashboardPage;