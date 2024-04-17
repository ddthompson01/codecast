import { notFound } from "next/navigation";

import { getUserByUsername } from "@/lib/user-services";
import LiveKitStream  from "@/components/livekitStream";
import { isFollowingUser } from "@/lib/follow-service";
import { Actions } from "./_components/actions";

const UserPage = async ({ params }) => {
  const user = await getUserByUsername(params.username);

  if (!user || !user.stream) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);

  return (
    <>
      <LiveKitStream
        room={user?.username + "'s stream"} 
        isLive={user.stream.isLive} // Pass the isLive status of the stream
        style={{width: '800px', height: '450px' }} 
      />
      {/* Temporary Following Status */}
      <p className="mt-6 px-4"><span className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Is Following: {`${isFollowing}`}</span></p>
      <div className="mt-4 px-4">
        <Actions userId={user.id} isFollowing={isFollowing}/>
      </div>
    </>

  );
};

export default UserPage;
