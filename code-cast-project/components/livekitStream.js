"use client";

import { useEffect, useState } from 'react';
import { useUser } from "@clerk/nextjs";
import { LiveKitRoom, GridLayout, ParticipantTile, RoomAudioRenderer, ControlBar, useTracks, LayoutContextProvider, ConnectionState, Chat } from '@livekit/components-react';
import { Track } from 'livekit-client';
import '@livekit/components-styles';

export default function LiveKitStream({ room, style, isLive }) {
  const { user, isSignedIn } = useUser();
  const [token, setToken] = useState("");

  useEffect(() => {
    const username = user?.username || "quickstart-user";
   
    (async () => {
      try {
        const resp = await fetch(`/api/livekit/get-participant-token?room=${room}&username=${username}`);
        const data = await resp.json();
        setToken(data.token);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [isSignedIn, user?.username, room, isLive]);

  if (!isLive) {
    return (
      <div style={{ ...style, display: 'flex', justifyContent: 'center', alignItems: 'center', color: "darkgray" }}>
        <img src="https://via.placeholder.com/800x450.png?text=Stream+Offline" alt="Stream Offline" />
      </div>
    );
  }

  
  if (token === "") {
    return <div>Getting token...</div>;
  }

  return (
    <LayoutContextProvider>
      <div className='flex'>
      <LiveKitRoom
        video={true}
        audio={true}
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        data-lk-theme="default"
        style={{ ...style, display: 'flex', flex: 1 }}
      >
        <div className="flex-grow">
          <MyVideoConference />
          <RoomAudioRenderer />
          <ConnectionState />
          <ControlBar />
        </div>
        <Chat className="flex-none w-1/4 min-w-[300px] max-w-[400px]" />
      </LiveKitRoom>
      </div>
    </LayoutContextProvider>
  );
}

function MyVideoConference() {
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false },
  );
  return (
    <GridLayout tracks={tracks} style={{ height: '100%' }}>
      <ParticipantTile />
    </GridLayout>
  );
}
