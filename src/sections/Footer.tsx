import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = [
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/abdalrahmanf2",
    },
    {
        title: "Github",
        href: "https://github.com/boodyf2/",
    },
];
export const Footer = () => {
    const curYear = new Date().getFullYear();
    return (
        <footer className="relative z-0 overflow-x-clip">
            <div className="container">
                <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row items-center md:justify-between gap-8">
                    <div className="text-white/40">
                        &copy; {curYear}. All rights reserved.
                    </div>
                    <nav className="flex flex-col md:flex-row items-center gap-6">
                        {FOOTER_LINKS.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                target="_blank"
                                className={buttonVariants({
                                    variant: "link",
                                    className: "font-semibold",
                                })}
                            >
                                <span>{link.title}</span>
                                <ArrowUpRight />
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
            <div className="absolute pointer-events-none -z-10 h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]" />
        </footer>
    );
};
