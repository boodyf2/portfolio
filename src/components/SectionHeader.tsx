interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    description: string;
}

const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
    return (
        <>
            <div className="text-center flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                    {eyebrow}
                </p>
            </div>
            <div className="text-center space-y-4 mt-6">
                <h2 className="font-serif text-3xl md:text-5xl">{title}</h2>
                <p className="text-white/60 md:text-lg lg:text-xl max-w-md mx-auto">
                    {description}
                </p>
            </div>
        </>
    );
};

export default SectionHeader;
