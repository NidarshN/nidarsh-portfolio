"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
    FaJava,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiNextdotjs,
    SiPandas,
    SiNumpy,
    SiTensorflow,
    SiPytorch,
    SiAmazonwebservices,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const about = {
    title: "About Me",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum neque tempora! Perferendis nam voluptatum modi reiciendis ratione fugit tempora facere? Porro, eveniet corporis. Quod nesciunt iste blanditiis facilis deleniti!",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Nidarsh Nithyananda",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91) 8494914899",
        },
        {
            fieldName: "Experience",
            fieldValue: "3+ Years",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian",
        },
        {
            fieldName: "Email",
            fieldValue: "nidarsh.nithyananda@gmail.com",
        },
        // {
        //     fieldName: "Freelance",
        //     fieldValue: "Available",
        // },
        {
            fieldName: "Languages",
            fieldValue: "English, Hindi, Kannada, Tulu",
        },
    ],
};

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "Experience",
    description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus excepturi explicabo eligendi similique hic nesciunt provident obcaecati commodi quos voluptates id mollitia qui, eveniet dolor, quisquam enim, doloribus nisi eaque.",
    items: [
        {
            company: "Thaniya Technologies",
            position: "Senior Software Engineer",
            duration: "2022 - Present",
        },
        {
            company: "Tech Mahindra",
            position: "Software Engineer",
            duration: "2021 - 2022",
        },
        {
            company: "IBM",
            position: "Application Programmer",
            duration: "2019 - 2020",
        },
        {
            company: "Sahyadri College of Engineering & Management",
            position: "Research Assistant",
            duration: "2018 - 2019",
        },
    ],
};

const education = {
    icon: "/assets/resume/cap.svg",
    title: "Education",
    description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus excepturi explicabo eligendi similique hic nesciunt provident obcaecati commodi quos voluptates id mollitia qui, eveniet dolor, quisquam enim, doloribus nisi eaque.",
    items: [
        {
            // institution: "University of Alabama at Birmingham",
            institution: "UAB, Birmingham",
            degree: "Master of Science",
            field: "Computer Science",
            duration: "2022 - 2024",
            grade: "3.7 / 4.0",
        },
        {
            // institution: "Sahyadri College of Engineering and Management",
            institution: "SCEM, Mangaluru",
            degree: "Bachelor of Engineering",
            field: "Computer Science & Engineering",
            duration: "2015 - 2019",
            grade: "7.32 / 10.0",
        },
        {
            // institution: "St. Aloysius Pre University College",
            institution: "St. Aloysius PUC, Mangaluru",
            degree: "12th",
            field: "",
            duration: "2015",
            grade: "89.67%",
        },
        {
            institution: "St. Aloysius, Mangaluru",
            degree: "10th",
            field: "",
            duration: "2013",
            grade: "91.04%",
        },
    ],
};

const skills = {
    title: "Skills",
    description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis hic doloremque quas ullam, necessitatibus porro laudantium error. Debitis repellendus, nulla sed rerum, laboriosam dolorem libero beatae nemo modi vitae porro?",
    skilllist: [
        {
            icon: <FaPython />,
            name: "Python 3",
        },
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <SiAmazonwebservices />,
            name: "AWS",
        },
        {
            icon: <SiPytorch />,
            name: "Pytorch",
        },
        {
            icon: <SiTensorflow />,
            name: "Tensorflow",
        },
        {
            icon: <SiPandas />,
            name: "Pandas",
        },
        {
            icon: <SiNumpy />,
            name: "Numpy",
        },
        {
            icon: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <FaNodeJs />,
            name: "NodeJS",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
    ],
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="about"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="felx flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">About Me</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[480px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="min-w-[6px] h-[6px] rounded-full bg-accent text-accent"></span>
                                                        <p className="text-white/60">
                                                            {item.company}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[480px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[300px] min-h-[30px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <p className="text-white/80">
                                                        {item.field}
                                                    </p>
                                                    <span className="flex flex-row justify-between w-full">
                                                        <p className="text-white/60">
                                                            Grade:{" "}
                                                        </p>
                                                        <p className="text-accent">
                                                            {item.grade}
                                                        </p>
                                                    </span>
                                                    <div className="flex items-center gap-3">
                                                        <span className="min-w-[6px] h-[6px] rounded-full bg-accent text-accent"></span>
                                                        <p className="text-white/60 w-[300px]">
                                                            {item.institution}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ScrollArea className="h-[480px]">
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {skills.skilllist.map(
                                            (skill, index) => {
                                                return (
                                                    <li key={index}>
                                                        <TooltipProvider
                                                            delayDuration={100}
                                                        >
                                                            <Tooltip>
                                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                        {
                                                                            skill.icon
                                                                        }
                                                                    </div>
                                                                    {/* <div className="text-center">{skill.name}</div> */}
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="capitalize">
                                                                        {
                                                                            skill.name
                                                                        }
                                                                    </p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <div key={index} className="h-[50px] px-4 bg-[#232329] rounded-xl flex justify-start items-center group">
                                                <li
                                                    
                                                    className="flex items-center justify-center xl:justify-start gap-4 "
                                                >
                                                    <span className="text-white/60">
                                                        {item.fieldName}
                                                    </span>
                                                    <span className="">
                                                        {item.fieldValue}
                                                    </span>
                                                </li>
                                            </div>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
