import { notFound } from "next/navigation";

import LiveKitStream from "@/components/livekitStream";
import { getUserByUsername } from "@/lib/user-services";

const UserPage = async ({ params }) => {
  const user = await getUserByUsername(params.username);

  if (!user || !user.stream) {
    notFound();
  }

  return (
    <LiveKitStream
    room={user?.username + "'s stream"} 
      isLive={user.stream.isLive} 
      style={{width: '800px', height: '450px' }} 
    />
  );
};

export default UserPage;
