import { Sparkle } from "lucide-react";

const WORDS = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalabel",
    "User Friendly",
    "Responsive",
    "Maintable",
    "Search Optimized",
    "Usable",
    "Reliable",
];

export const TapeSection = () => {
    return (
        <div className="py-16 lg:py-24 overflow-x-clip">
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
                <div className="flex justify-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex-none flex gap-4 py-3">
                        {WORDS.map((word) => (
                            <div
                                className="inline-flex items-center gap-4"
                                key={word}
                            >
                                <span className="text-gray-900 uppercase font-extrabold text-sm">
                                    {word}
                                </span>
                                <Sparkle className="size-6 text-gray-900 fill-gray-900 -rotate-12" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
