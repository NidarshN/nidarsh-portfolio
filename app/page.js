"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Typewriter from "typewriter-effect";
import { saveAs } from "file-saver";
import { socials } from "@/lib/utils";

const Home = () => {

    const downloadResume = () => {
        saveAs(
            process.env.NEXT_PUBLIC_RESUME_LINK,
        );
    };
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <h1 className="h1 mb-6">
                            {`Hello I'm `}
                            <br />
                            <span className="name-font text-accent">
                                Nidarsh Nithyananda
                            </span>
                        </h1>
                        <span className="text-xl">
                            <Typewriter
                                options={{
                                    strings: ["Software Engineer", "Machine Learning Engineer", "Photographer"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>

                        <p className="max-w-[500px] mt-5 mb-9 text-white/80">
                        With hands-on experience across 8+ technologies, I enjoy creating practical and innovative software solutions that drive efficiency and enhance user experiences. Explore my work to see how I combine my technical skills and problem-solving abilities to deliver impactful projects.
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button
                                variant="outline"
                                size="lg"
                                className="uppercase flex items-center gap-2"
                                onClick={downloadResume}
                            >
                                <span>Download CV</span>
                                <FiDownload className="text-xl" />
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-10 h-10 border border-accent rounded-full flex flex justify-center items-center text-accent text-2xl hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                    data={socials}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats/>
        </section>
    );
};

export default Home;
