import caseCobraLandingPage from "@/assets/images/landing-pages/casecobra-landing-page.png";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
    {
        company: "CaseCobra",
        year: "2024",
        title: "A Modern E-commerce Platform For Custom Phone Cases",
        features: [
            "Complete shop built from scratch in Next.js 14",
            "Full TypeScript implementation",
            "Authentication via Auth.js",
        ],
        links: {
            srcCode: "https://github.com/boodyf2/casecobra",
            livePrev: "https://casecobra-lake-iota.vercel.app/",
        },
        image: caseCobraLandingPage,
    },
    {
        company: "CaseCobra-2",
        year: "2024",
        title: "A modern e-commerce platform for custom phone cases",
        features: [
            "Complete shop built from scratch in Next.js 14",
            "Full TypeScript implementation",
            "Authentication via Auth.js",
        ],
        links: {
            srcCode: "https://github.com/boodyf2/casecobra",
            livePrev: "https://casecobra-lake-iota.vercel.app/",
        },
        image: caseCobraLandingPage,
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="pb-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    eyebrow="Real-World Results"
                    title="Featured Projects"
                    description="See how I transform concepts into engaing digital experiences"
                />

                <div className="mt-10 md:mt-24 flex flex-col gap-20">
                    {portfolioProjects.map((project) => (
                        <Card
                            className="pb-0 pt-8 px-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
                            key={project.company}
                        >
                            <div className="grid lg:grid-cols-2 gap-16">
                                <div className="lg:pb-16 space-y-4">
                                    <div className="font-bold uppercase tracking-widest text-sm inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                                        <span>{project.company}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                                        {project.title}
                                    </h3>

                                    <hr className="border-t-2 border-white/5" />

                                    <ul className="space-y-4">
                                        {project.features.map((feature) => (
                                            <li
                                                className="text-white/60 text-sm md:text-base"
                                                key={feature}
                                            >
                                                <CheckCircle className="inline size-4 mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-col md:flex-row gap-4">
                                        <Link
                                            href={project.links.livePrev}
                                            className={buttonVariants({
                                                variant: "default",
                                            })}
                                            target="_blank"
                                        >
                                            Visit Live Site <ArrowUpRight />
                                        </Link>
                                        <Link
                                            href={project.links.srcCode}
                                            className={buttonVariants({
                                                variant: "link",
                                            })}
                                            target="_blank"
                                        >
                                            View Source Code
                                            <FaGithub />
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="px-2 pt-4 md:px-4 md:pt-6 space-y-4 bg-zinc-950 rounded-tl-xl rounded-tr-xl md:rounded-tl-3xl md:rounded-tr-3xl overflow-hidden shadow-[0_0_8px_inset] shadow-gray-500 lg:absolute lg:h-full lg:w-auto bottom-0 -right-2/3">
                                        <Image
                                            src={project.image}
                                            alt={`${project.company} Landing Page`}
                                            className="-mb-4 md:mb-0 rounded-tl-lg rounded-tr-lg h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
