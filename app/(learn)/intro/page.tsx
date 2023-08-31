"use client"

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function IntroPage() {

    const config = {
        type: "spring",
        damping: 20,
        stiffness: 100
    };

    return (
        <div className="flex flex-col p-20 text-xl lg:px-60 xl:px-80">
            <h1 className="text-5xl font-bold">Our scenario</h1>
            <p className="mt-6">
                Meet Alice.
            </p>
            <div className="flex mt-5">
                <Image
                    alt="Alice"
                    src="alice.svg"
                    width={200}
                    height={200}
                />
                <p className="mt-10 font-bold text-2xl">Hi!</p>
            </div>
            <p className="mt-5">Alice has a secret: it took her <b>ages</b> to understand RSA encryption.</p>
            <p className="mt-4">Actually, it was a couple days - but she doesn't want anybody to know the exact number of days, except for her friend Bob.</p>

            <div className="flex justify-end mt-5">
                <p className="mt-10 font-bold text-2xl">Yo.</p>
                <Image
                    alt="Bob"
                    src="bob.svg"
                    width={200}
                    height={200}
                />
            </div>

            <p className="mt-4">Alice's nosy classmate, Maddie, really enjoys listening to Alice and Bob talking.</p>

            <p>Alice knows this and decides to use RSA encryption to communicate this number to Bob.</p>
            
            <div className="flex justify-center mt-5 ml-16">
                <Image
                    alt="Maddie"
                    src="maddie.svg"
                    width={200}
                    height={200}
                />
                <p className="mt-10 font-bold text-2xl">Ugh..</p>
            </div>
            
            <p className="mt-4">This way, even if Maddie is listening, she will never be able to understand what they are saying!</p>


            <a href="/first-step" className="flex justify-center">
                <Button className="text-2xl px-7 py-7 mt-10">
                    <div className="flex flex-row ml-2">
                        Let's do this!
                        <ArrowRight className="ml-2 mt-1" />
                    </div>
                </Button>
            </a>
        </div>
    )
}