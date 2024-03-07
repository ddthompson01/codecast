"use client";

import { useEffect, useState } from 'react';
import { useUser } from "@clerk/nextjs";
import { LiveKitRoom, GridLayout, ParticipantTile, RoomAudioRenderer, ControlBar, useTracks, LayoutContextProvider, ConnectionState } from '@livekit/components-react';
import { Track } from 'livekit-client';
import '@livekit/components-styles';

export default function LiveKitStream({ room, style, isLive }) {
  const { user, isSignedIn } = useUser();
  const [token, setToken] = useState("");

  useEffect(() => {
    if (!isSignedIn || !isLive) return;

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
  }, [isSignedIn, user?.firstName, room, isLive]);

  if (!isLive) {
    return (
      <div style={{ ...style, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="https://via.placeholder.com/800x450.png?text=Stream+Offline" alt="Stream Offline" />
      </div>
    );
  }

  if (token === "") {
    return <div>Getting token...</div>;
  }

  return (
    <LayoutContextProvider>
      <LiveKitRoom
        video={true}
        audio={true}
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        data-lk-theme="default"
        style={{ ...style }}
      >
        <MyVideoConference />
        <RoomAudioRenderer />
        <ConnectionState />
        <ControlBar/>
      </LiveKitRoom>
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
