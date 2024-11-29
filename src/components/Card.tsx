import grainImg from "@/assets/images/grain.jpg";
import { cn } from "@/lib/utils";
import { Sparkle } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

export const Card = ({
    className,
    children,
    ...other
}: ComponentPropsWithoutRef<"div">) => {
    return (
        <div
            className={cn(
                "p-6 bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:absolute after:inset-0 after:z-10 after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:rounded-3xl after:pointer-events-none",
                className
            )}
            {...other}
        >
            {children}
            <div
                className="absolute inset-0 -z-30 opacity-5"
                style={{
                    background: `url(${grainImg.src})`,
                }}
            />
        </div>
    );
};

interface CardHeaderProps {
    title: string;
    description: string;
    className?: string;
}

export const CardHeader = ({
    title,
    description,
    className,
}: CardHeaderProps) => {
    return (
        <div className={cn("flex flex-col gap-2", className)}>
            <div className="inline-flex gap-4 items-center">
                <Sparkle className="size-9 text-emerald-300 fill-emerald-300" />
                <h3 className="font-serif text-3xl">{title}</h3>
            </div>
            <p className="text-sm lg:text-base text-white/60">{description}</p>
        </div>
    );
};
