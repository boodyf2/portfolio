import Image from "next/image";
import memojiImg from "@/assets/images/memoji-computer.png";
import grainImg from "@/assets/images/grain.jpg";

import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDown, Sparkle, Sparkles } from "lucide-react";
import HeroOrbit from "@/components/HeroOrbit";

export const HeroSection = () => {
    return (
        <section
            id="home"
            className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
        >
            <div className="container space-y-8">
                <div className="flex flex-col items-center">
                    <Image
                        className="w-[100px]"
                        src={memojiImg}
                        alt="Person peaking behind a laptop"
                    />
                    <div className="flex items-center gap-4 bg-gray-950 border border-gray-800 px-4 py-1.5 rounded-lg">
                        <div className="size-2.5 rounded-full bg-green-500 relative">
                            <div className="rounded-full bg-green-500 animate-ping-large absolute inset-0" />
                        </div>
                        <p className="text-sm font-medium">
                            Available for new projects
                        </p>
                    </div>
                </div>

                <div className="max-w-lg mx-auto space-y-4">
                    <h1 className="font-serif text-center text-3xl md:text-5xl tracking-tight">
                        Building Exceptional User Experiences
                    </h1>
                    <p className="text-center text-white/60 md:text-lg">
                        I specialize in transforming designs into functional,
                        high-performance web applications. Let&apos;s discuss
                        your next project.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <a
                        href="#projects"
                        className={buttonVariants({
                            variant: "outline",
                            className: "font-semibold",
                        })}
                    >
                        <span>Explore My Work</span>
                        <ArrowDown />
                    </a>
                    <a
                        href="mailto:abdalrahman.vim@gmail.com"
                        className={buttonVariants({
                            variant: "secondary",
                            className: "font-semibold",
                        })}
                    >
                        <span>👋</span>
                        <span>Let&apos;s Connect</span>
                    </a>
                </div>
            </div>

            {/* Background */}
            <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div
                    className="absolute inset-0 -z-30 opacity-5"
                    style={{
                        background: `url(${grainImg.src})`,
                    }}
                />
                <div className="hero-ring  size-[620px]" />
                <div className="hero-ring size-[820px]" />
                <div className="hero-ring size-[1020px]" />
                <div className="hero-ring size-[1220px]" />

                <HeroOrbit
                    size={430}
                    rotation={-14}
                    shouldOrbit
                    orbitDuration={30}
                    shouldSpin
                    spinDuration={6}
                >
                    <Sparkles className="fill-emerald-300 text-emerald-300 size-8 opacity-20" />
                </HeroOrbit>
                <HeroOrbit
                    size={440}
                    rotation={79}
                    shouldOrbit
                    orbitDuration={32}
                    shouldSpin
                    spinDuration={6}
                >
                    <Sparkles className="fill-emerald-300 text-emerald-300 size-5 opacity-20" />
                </HeroOrbit>
                <HeroOrbit
                    size={520}
                    rotation={-41}
                    shouldOrbit
                    orbitDuration={34}
                >
                    <div className="size-2 bg-emerald-300 rounded-full opacity-20" />
                </HeroOrbit>
                <HeroOrbit
                    size={530}
                    rotation={178}
                    shouldOrbit
                    orbitDuration={36}
                    shouldSpin
                    spinDuration={6}
                >
                    <Sparkles className="fill-emerald-300 text-emerald-300 size-10 opacity-20" />
                </HeroOrbit>
                <HeroOrbit
                    size={550}
                    rotation={20}
                    shouldOrbit
                    orbitDuration={38}
                    shouldSpin
                    spinDuration={8}
                >
                    <Sparkle className="fill-emerald-300 text-emerald-300 size-12" />
                </HeroOrbit>
                <HeroOrbit
                    size={590}
                    rotation={98}
                    shouldOrbit
                    orbitDuration={40}
                    shouldSpin
                    spinDuration={8}
                >
                    <Sparkle className="fill-emerald-300 text-emerald-300 size-8" />
                </HeroOrbit>
                <HeroOrbit
                    size={650}
                    rotation={-5}
                    shouldOrbit
                    orbitDuration={42}
                >
                    <div className="size-2 bg-emerald-300 rounded-full opacity-20" />
                </HeroOrbit>
                <HeroOrbit
                    size={710}
                    rotation={144}
                    shouldOrbit
                    orbitDuration={44}
                    shouldSpin
                    spinDuration={6}
                >
                    <Sparkles className="fill-emerald-300 text-emerald-300 size-14 opacity-20" />
                </HeroOrbit>
                <HeroOrbit
                    size={720}
                    rotation={85}
                    shouldOrbit
                    orbitDuration={46}
                >
                    <div className="size-3 bg-emerald-300 rounded-full opacity-20" />
                </HeroOrbit>
                <HeroOrbit
                    size={800}
                    rotation={-72}
                    shouldOrbit
                    orbitDuration={48}
                    shouldSpin
                    spinDuration={8}
                >
                    <Sparkle className="fill-emerald-300 text-emerald-300 size-28" />
                </HeroOrbit>
            </div>
        </section>
    );
};
