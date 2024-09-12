"use client";

import { GoArrowUpRight } from "react-icons/go";

import { LuExternalLink } from "react-icons/lu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiSchoolLine } from "react-icons/ri";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "@/components/ui/tooltip";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    about,
    experience,
    education,
    skills,
    certificates,
    publications,
} from "@/lib/utils";

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
                        <TabsTrigger value="certificates">
                            Certificates
                        </TabsTrigger>
                        <TabsTrigger value="publications">
                            Publications
                        </TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    <span className="flex flex-start text-center items-center justify-center xl:justify-start gap-4 w-full">
                                        {experience.icon}
                                        {experience.title}
                                    </span>
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[480px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[15px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[220px] px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 border border-white/20"
                                                >
                                                    <div className="w-full justify-between items-center">
                                                        <div className="flex flex-col justify-center items-center lg:items-start lg:mb-3">
                                                            <span className="text-accent">
                                                                {item.duration}
                                                            </span>
                                                            <h3 className="text-xl w-full min-h-[30px] text-center lg:text-left font-semibold">
                                                                {item.position}
                                                            </h3>
                                                            <p className="flex flex-col lg:flex-row lg:w-full lg:justify-between lg:mt-2">
                                                            <span className="text-center lg:text-left text-white/80">
                                                                {item.type}
                                                            </span>
                                                            <span className="text-center lg:text-left text-white/80">
                                                            {item.location}
                                                            </span>
                                                            </p>
                                                            
                                                        </div>

                                                        <div className="flex items-center justify-center lg:justify-start gap-3">
                                                            <p className="text-white/60 lg:h-[60px] lg:text-start">
                                                                {item.company}
                                                            </p>
                                                        </div>
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
                                    <span className="flex flex-start text-center items-center justify-center xl:justify-start gap-4 w-full">
                                        {education.icon}
                                        {education.title}
                                    </span>
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[480px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[10px] px-5">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[250px] lg:h-[180px] py-3 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 border border-white/20"
                                                >
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>

                                                    <div className="lg:flex w-full justify-between">
                                                        <div className="lg:justify-between lg:pt-0 lg:flex lg:flex-col">
                                                            <h3 className="text-xl font-semibold text-center lg:text-left">
                                                                {item.degree}
                                                            </h3>
                                                            <p className="text-white/80 truncate text-center lg:text-left">
                                                                {item.field}
                                                            </p>
                                                        </div>

                                                        <div className="flex pt-3 justify-around lg:pt-0 lg:flex lg:flex-col">
                                                            <div className="text-center font-semibold">
                                                                Grade
                                                            </div>
                                                            <div className="flex flex-row justify-center lg:justify-start items-end gap-1">
                                                                <p className="text-2xl lg:text-3xl text-center lg:text-left font-extrabold text-accent text-outline-transparent">
                                                                    {
                                                                        item
                                                                            .grade
                                                                            .score
                                                                    }
                                                                </p>
                                                                <p className="text-2xl lg:text-3xl text-center lg:text-left">
                                                                    {item.grade
                                                                        .type ==
                                                                    "grade"
                                                                        ? "/"
                                                                        : ""}
                                                                </p>
                                                                <p className="text-xl font-extrabold text-transparent text-outline text-center lg:text-left">
                                                                    {
                                                                        item
                                                                            .grade
                                                                            .total
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start lg:items-center gap-3 pt-3">
                                                        <p className="text-white/60 w-full">
                                                            {item.institution}, {item.location}
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
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        <span className="flex flex-start text-center items-center justify-center xl:justify-start gap-4 w-full">
                                            {skills.icon}
                                            {skills.title}
                                        </span>
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ScrollArea className="h-[480px]">
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-[20px] px-5 pt-5">
                                        {skills.skilllist.map(
                                            (skill, index) => {
                                                return (
                                                    <li key={index}>
                                                        <TooltipProvider
                                                            delayDuration={100}
                                                        >
                                                            <Tooltip>
                                                                <TooltipTrigger className="w-full h-[120px] pt-3 xl:pt-0 bg-[#232329] rounded-xl flex justify-center align-center items-center group border border-white/20 hover:scale-105"> {/*hover:translate-x-1 hover:translate-y-1*/}
                                                                    <span className="flex flex-col items-center">
                                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                            {
                                                                                skill.icon
                                                                            }
                                                                        </div>
                                                                        <div className="text-center xl:hidden">
                                                                            {
                                                                                skill.name
                                                                            }
                                                                        </div>
                                                                    </span>
                                                                </TooltipTrigger>
                                                                <TooltipContent className="hidden xl:flex">
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

                        <TabsContent
                            value="about"
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">
                                    <span className="flex flex-start text-center items-center justify-center xl:justify-start gap-4 w-full">
                                        {about.icon}
                                        {about.title}
                                    </span>
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>

                                <ScrollArea className="h-[480px]">
                                    <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                        {about.info.map((item, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="h-[50px] px-4 bg-[#232329] rounded-xl flex justify-start items-center group border border-white/20"
                                                >
                                                    <li className="flex items-center justify-center xl:justify-start gap-4">
                                                        <span className="text-white/60">
                                                            {item.fieldName}
                                                        </span>
                                                        <span
                                                            className={`${
                                                                item.fieldName ===
                                                                "Name"
                                                                    ? "name-font"
                                                                    : ""
                                                            }`}
                                                        >
                                                            {item.fieldValue}
                                                        </span>
                                                    </li>
                                                </div>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent
                            value="certificates"
                            className="w-full h-full"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        <span className="flex flex-start text-center items-center justify-center xl:justify-start gap-4 w-full">
                                            {certificates.icon}
                                            {certificates.title}
                                        </span>
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {certificates.description}
                                    </p>
                                </div>
                                <ScrollArea className="h-[480px]">
                                    <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 xl:gap-[15px]">
                                        {certificates.providers.map(
                                            (provider, index) => {
                                                return (
                                                    <Popover key={index}>
                                                        <PopoverTrigger asChild>
                                                            <li key={index}>
                                                                <TooltipProvider
                                                                    delayDuration={
                                                                        100
                                                                    }
                                                                >
                                                                    <Tooltip>
                                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group border border-white/20">
                                                                            <div className="flex w-full h-full justify-end">
                                                                                <span className="flex flex-col items-center justify-center w-full">
                                                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                                        {
                                                                                            provider.icon
                                                                                        }
                                                                                    </div>
                                                                                    <div className="text-center xl:hidden">
                                                                                        {
                                                                                            provider.name
                                                                                        }
                                                                                    </div>
                                                                                    <div className="text-xl mt-2 font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                                                                        {
                                                                                            provider
                                                                                                .certs
                                                                                                .length
                                                                                        }
                                                                                    </div>
                                                                                    {/* <div className="text-sm text-white/60 mt-2">Click to know more</div> */}
                                                                                </span>
                                                                                <GoArrowUpRight className="text-3xl mr-3 mt-2" />
                                                                            </div>
                                                                        </TooltipTrigger>
                                                                        <TooltipContent>
                                                                            <p className="capitalize">
                                                                                {
                                                                                    provider.name
                                                                                }
                                                                            </p>
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>
                                                            </li>
                                                        </PopoverTrigger>
                                                        <PopoverContent className=" w-[300px] md:w-[500px] bg-[#232329] text-white">
                                                            <ScrollArea
                                                                className={`${
                                                                    provider
                                                                        .certs
                                                                        .length ===
                                                                    1
                                                                        ? "contents"
                                                                        : "xl:h-[250px]"
                                                                }`}
                                                            >
                                                                <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 xl:gap-[10px]">
                                                                    {provider.certs.map(
                                                                        (
                                                                            cert,
                                                                            cert_index
                                                                        ) => {
                                                                            return (
                                                                                <div
                                                                                    key={
                                                                                        cert_index
                                                                                    }
                                                                                >
                                                                                    <div
                                                                                        className="flex bg-[#232329] rounded-xl justify-between items-center px-5 gap-4"
                                                                                        key={
                                                                                            cert_index
                                                                                        }
                                                                                    >
                                                                                        <p className="text-accent truncate">
                                                                                            {
                                                                                                cert.name
                                                                                            }
                                                                                        </p>
                                                                                        <Link
                                                                                            key={
                                                                                                cert_index
                                                                                            }
                                                                                            href={
                                                                                                cert.link
                                                                                            }
                                                                                            target="_blank"
                                                                                        >
                                                                                            <LuExternalLink />
                                                                                        </Link>
                                                                                    </div>
                                                                                    {cert_index !=
                                                                                    provider
                                                                                        .certs
                                                                                        .length -
                                                                                        1 ? (
                                                                                        <Separator className="mt-1" />
                                                                                    ) : (
                                                                                        ""
                                                                                    )}
                                                                                </div>
                                                                            );
                                                                        }
                                                                    )}
                                                                </ul>
                                                            </ScrollArea>
                                                        </PopoverContent>
                                                    </Popover>
                                                );
                                            }
                                        )}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent
                            value="publications"
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">
                                    <span className="flex flex-start text-center items-center justify-center xl:justify-start gap-4 w-full">
                                        {publications.icon}
                                        {publications.title}
                                    </span>
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {publications.description}
                                </p>

                                <ScrollArea className="h-[480px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-y-6 lg:w-[90%] lg:items-center lg:justify-center mx-auto lg:mx-0">
                                        {publications.articles.map(
                                            (item, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="h-[300px] lg:h-[250px] px-4 bg-[#232329] rounded-xl flex group border border-white/20 lg:justify-between"
                                                    >
                                                        <div className="flex flex-col justify-center items-center mx-3">
                                                            <li className=" flex flex-col justify-center  lg:justify-start gap-4 ">
                                                                <span className="text-accent text-xl font-semibold">
                                                                    {item.name}
                                                                </span>
                                                                <span className="flex flex-col lg:items-start">
                                                                    <p>
                                                                        {
                                                                            item.book
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        {
                                                                            item.journal
                                                                        }
                                                                    </p>
                                                                </span>
                                                            </li>
                                                        </div>
                                                        <Link
                                                            key={index}
                                                            href={item.link}
                                                            target="_blank"
                                                            className="text-3xl h-auto mt-2"
                                                        >
                                                            <LuExternalLink />
                                                        </Link>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
