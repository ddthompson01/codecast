"use client"

import { Card, CardHeader, Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import { motion } from "framer-motion";

const breatheAnimation = {
    initial: {
        scale: 1
    },
    animate: {
        scale: [1, 1.2, 1], // Scales the button in and out
        transition: {
            duration: 2, // Duration of one cycle of the animation
            ease: "easeInOut",
            repeat: Infinity, // Repeats the animation indefinitely
            repeatType: "loop"
        }
    }
};

export const Following = ({ data }) => {

    return (
        <div>
            <h2 className="font-bold text-white text-[24px]">Following:</h2>
            {data.map(user => (
                <div key={user.following.id} className="my-4">
                    <Link href={`/${user.following.username}`}>
                        <Card className="max-w-[340px] border-gray-600 rounded-lg border-2 hover:opacity-[.65]">
                            <CardHeader>
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex gap-5 items-center">
                                        <Avatar isBordered radius="full" size="md" src={user.following.imageUrl}/>
                                        <h4 className="text-small font-semibold leading-none text-default-600 text-white">{user.following.username}</h4>
                                    </div>
                                    {user.following.stream?.isLive && 
                                    <motion.div
                                        initial="initial"
                                        animate="animate"
                                        variants={breatheAnimation}>
                                        <Button className="bg-red-600 text-white font-bold rounded-lg h-8">LIVE</Button>
                                    </motion.div>}
                                </div>
                            </CardHeader>
                        </Card>
                    </Link>
                </div>
            ))}
        </div>
    );
};
