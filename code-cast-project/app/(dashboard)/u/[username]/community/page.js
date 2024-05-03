"use client"
import React from 'react';
import  VotingComponent  from "@/components/ui/VotingComponent";
import DiscussionComponent from "@/components/ui/DiscussionComponent";



const CommunityPage = () => {
  return (
    <div>
      <h1>Community Page</h1>
      <VotingComponent />
      <DiscussionComponent />
    </div>
  );
};

export default CommunityPage;