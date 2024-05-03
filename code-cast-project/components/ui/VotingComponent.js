import React, { useState } from 'react';

const VotingComponent = () => {
  const [votes, setVotes] = useState({
    topic1: 0,
    topic2: 0,
    topic3: 0,
  });

  const handleVote = (topic) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [topic]: prevVotes[topic] + 1,
    }));
  };

  return (
    <div>
      <h2>Vote for Topics</h2>
      <ul>
        <li>
          Topic 1: {votes.topic1}
          <button onClick={() => handleVote('topic1')}>Vote</button>
        </li>
        <li>
          Topic 2: {votes.topic2}
          <button onClick={() => handleVote('topic2')}>Vote</button>
        </li>
        <li>
          Topic 3: {votes.topic3}
          <button onClick={() => handleVote('topic3')}>Vote</button>
        </li>
      </ul>
    </div>
  );
};

export default VotingComponent;