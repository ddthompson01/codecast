"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardHeader, Avatar, Button } from "@nextui-org/react";
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


export default function JavaPage() {
    const [streams, setStreams] = useState([]);

    useEffect(() => {
        async function fetchStreams() {
            const response = await fetch('/api/fetchStreams?categoryName=Java');
            const data = await response.json();
            setStreams(data);
        }

        fetchStreams();
    }, []);

    return (
        <div className="bg-[#0D1520] min-h-screen flex flex-col items-center pt-16 text-white">
            <h1 className="text-2xl font-semibold lg:text-4xl mb-8">Java Streams</h1>
            <div className="w-full max-w-4xl px-4">
                {streams.length > 0 ? (
                    streams.map((stream) => (
                        <div key={stream.id} className="mb-4">
                            <Link href={`/${stream.user.username}`}>
                                <Card className="max-w-[340px] border-gray-600 rounded-lg border-2 hover:opacity-[.65]">
                                    <CardHeader>
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex gap-5 items-center">
                                                <Avatar isBordered radius="full" size="md" src={stream.user.imageUrl} />
                                                <h4 className="text-small font-semibold leading-none text-default-600 text-white">{stream.user.username}</h4>
                                            </div>
                                                <motion.div
                                                    initial="initial"
                                                    animate="animate"
                                                    variants={breatheAnimation}>
                                                    <Button className="bg-red-600 text-white font-bold rounded-lg h-8">LIVE</Button>
                                                </motion.div>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </Link>
                            { }
                        </div>
                    ))
                ) : (
                    <p>No current streams under the Java category.</p>
                )}
            </div>
        </div>
    );
}
