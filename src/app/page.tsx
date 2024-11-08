import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

const Home = () => {
    return (
        <>
            <HeroSection />
            <ProjectsSection />
            <TapeSection />
            <AboutSection />
            <ContactSection />
        </>
    );
};

export default Home;
