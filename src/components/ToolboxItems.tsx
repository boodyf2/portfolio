import { cn } from "@/lib/utils";
import TechIcon from "./TechIcon";

interface ToolboxItemsProps {
    items: {
        title: string;
        Icon: React.ElementType;
    }[];
    className?: string;
    itemsWrapperClassName?: string;
}

const ToolboxItems = ({
    items,
    className,
    itemsWrapperClassName,
}: ToolboxItemsProps) => {
    return (
        <div
            className={cn(
                "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
                className
            )}
        >
            <div
                className={cn(
                    "flex flex-none py-0.5 gap-6 pr-6",
                    itemsWrapperClassName
                )}
            >
                {items.map((tool) => (
                    <div
                        key={tool.title}
                        className="py-2 px-3 inline-flex items-center gap-4 outline outline-2 outline-white/10 rounded-lg"
                    >
                        <TechIcon component={tool.Icon} />
                        <span className="font-semibold">{tool.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToolboxItems;
