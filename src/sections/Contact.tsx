import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import grainImg from "@/assets/images/grain.jpg";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-16 pt-12">
            <div className="container">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0 overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl">
                                Let&apos;s create something amazing together
                            </h2>
                            <p className="text-sm md:text-base mt-2">
                                Ready to bring your next projects to life?
                                Let&apos;s connect and discuss how I can help
                                you achieve your goals.
                            </p>
                        </div>
                        <div>
                            <Button
                                size="lg"
                                className="bg-gray-900 text-white hover:bg-gray-900/90"
                            >
                                <span className="text-semibold">
                                    Contact Me
                                </span>
                                <ArrowUpRight className="size-4" />
                            </Button>
                        </div>
                    </div>
                    <div
                        className="absolute inset-0 opacity-10 -z-10"
                        style={{ background: `url(${grainImg.src})` }}
                    />
                </div>
            </div>
        </section>
    );
};
