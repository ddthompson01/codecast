import { notFound } from "next/navigation";

import { getUserByUsername } from "@/lib/user-services";
import LiveKitStream  from "@/components/livekitStream";

const UserPage = async ({ params }) => {
  const user = await getUserByUsername(params.username);

  if (!user || !user.stream) {
    notFound();
  }

  return (
    <LiveKitStream
    room={user?.username + "'s stream"} // Assuming the room name is stored in stream.name
      isLive={user.stream.isLive} // Pass the isLive status of the stream
      style={{width: '800px', height: '450px' }} // Pass any styles if needed, or remove this prop if not used
    />
  );
};

export default UserPage;
