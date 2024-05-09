"use server"

import { revalidatePath } from "next/cache";

import { followUser, unfollowUser } from "@/lib/follow-service";

export const onFollow = async (id) => {
    try {
        const followedUser = await followUser(id);

        revalidatePath("/");
        
        if (followedUser) {
            revalidatePath(`/${followedUser.following.username}`);
        }
        return followedUser;
    }
    catch (error) {
        throw new Error("Internal Error");
    }
}

export const onUnfollow = async (id) => {
    try {
        const unfollowedUser = await unfollowUser(id);

        revalidatePath("/");

        if (unfollowedUser) {
            revalidatePath(`/${unfollowedUser.following.username}`)
        }

        return unfollowedUser; 
    }

    catch (error) {
        throw new Error("Internal Error");
    }
}