import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface HeroOrbitProps {
    size: number;
    rotation: number;
    shouldOrbit?: boolean;
    orbitDuration?: number;
    shouldSpin?: boolean;
    spinDuration?: number;
}

const HeroOrbit = ({
    size,
    rotation,
    shouldOrbit = false,
    orbitDuration,
    spinDuration,
    shouldSpin = false,
    children,
}: PropsWithChildren<HeroOrbitProps>) => {
    return (
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
                className={cn(shouldOrbit && "animate-spin")}
                style={{ animationDuration: `${orbitDuration}s` }}
            >
                <div
                    className="flex justify-start items-start"
                    style={{
                        height: `${size}px`,
                        width: `${size}px`,
                        transform: `rotate(${rotation}deg)`,
                    }}
                >
                    <div
                        className={cn(shouldSpin && "animate-spin")}
                        style={{ animationDuration: `${spinDuration}s` }}
                    >
                        <div
                            className="inline-flex"
                            style={{
                                transform: `rotate(${rotation * -1}deg)`,
                            }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroOrbit;
