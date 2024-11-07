"use client";
import { Card, CardHeader } from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import deepWork from "@/assets/images/book-covers/deep-work.png";
import superiorMen from "@/assets/images/book-covers/the-way-superior-men.jpg";
import nobodyToldMe from "@/assets/images/book-covers/why-has-nobody.jpg";
import Image from "next/image";
import { TbBrandPrisma } from "react-icons/tb";
import { SiReact, SiTailwindcss } from "react-icons/si";
import { RiGithubFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const TOOLBOX_ITEMS = [
    {
        title: "TypeScript",
        Icon: BiLogoTypescript,
    },
    {
        title: "Tailwind CSS",
        Icon: SiTailwindcss,
    },
    {
        title: "Next.Js",
        Icon: RiNextjsFill,
    },
    {
        title: "Prisma",
        Icon: TbBrandPrisma,
    },
    {
        title: "React",
        Icon: SiReact,
    },
    {
        title: "Github",
        Icon: RiGithubFill,
    },
];

const HOBBIES = [
    {
        title: "Gaming",
        emoji: "🎮",
        left: "5%",
        top: "5%",
    },
    {
        title: "Music",
        emoji: "🎵",
        left: "60%",
        top: "5%",
    },
    {
        title: "Gym",
        emoji: "🏋️",
        left: "10%",
        top: "70%",
    },
    {
        title: "Video Editing",
        emoji: "🎬",
        left: "35%",
        top: "40%",
    },
    {
        title: "Reading",
        emoji: "📚",
        left: "70%",
        top: "45%",
    },
];

export const AboutSection = () => {
    const constraintRef = useRef<HTMLDivElement | null>(null);

    return (
        <section id="about" className="py-20">
            <div className="container">
                <SectionHeader
                    eyebrow="About Me"
                    title="A Glimpse Into My World"
                    description="Learn more about who I am, what I do, and what inspires me"
                />
                <div className="mt-20 grid grid-cols-1 md:grid-cols-6 gap-8">
                    <Card className="h-[320px] p-0 flex flex-col col-span-1 md:col-span-3 lg:col-span-2">
                        <CardHeader
                            title="My Reads"
                            description="Explore the books shaping my prespective"
                            className="p-6"
                        />
                        <div className="flex-1 flex justify-center -space-x-16 overflow-hidden">
                            <Image
                                className="h-full w-auto rounded-md rounded-b-none"
                                src={deepWork}
                                alt="Deep Work"
                            />
                            <Image
                                className="h-full w-auto mt-4 rounded-md rounded-b-none"
                                src={superiorMen}
                                alt="The way of superior men"
                            />
                            <Image
                                className="h-full w-auto mt-8 rounded-md rounded-b-none"
                                src={nobodyToldMe}
                                alt="Why has no body told me this before"
                            />
                        </div>
                    </Card>

                    <Card className="h-[320px] p-0 col-span-1 md:col-span-3 lg:col-span-4">
                        <CardHeader
                            title="My Toolbox"
                            description="Explore the technologies and tools I use to craft exceptional digital experiences"
                            className="px-6 pt-6"
                        />
                        <ToolboxItems
                            items={TOOLBOX_ITEMS}
                            className="mt-6"
                            itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                        />
                        <ToolboxItems
                            items={TOOLBOX_ITEMS}
                            className="mt-6"
                            itemsWrapperClassName="animate-move-right [animation-duration:40s]"
                        />
                    </Card>

                    <Card className="h-[320px] p-0 flex flex-col md:col-span-6">
                        <CardHeader
                            title="Beyond the Code"
                            description="Explore my interests and hobbies beyond th digital realm"
                            className="p-6"
                        />
                        <div ref={constraintRef} className="relative flex-1">
                            {HOBBIES.map((hobby) => (
                                <motion.div
                                    key={hobby.title}
                                    className="absolute inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400"
                                    style={{
                                        top: hobby.top,
                                        left: hobby.left,
                                    }}
                                    drag
                                    dragConstraints={constraintRef}
                                >
                                    <span className="text-zinc-950 font-medium">
                                        {hobby.title}
                                    </span>
                                    <span>{hobby.emoji}</span>
                                </motion.div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};
