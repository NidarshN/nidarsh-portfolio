"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";
import { projects } from "@/lib/utils";
import Social from "@/components/Social";
import { Separator } from "@/components/ui/separator";

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[90vh] flex flex-col justify-center pb-10 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-6xl leading-none flex gap-3 font-extrabold text-transparent text-outline">
                                {project.num}
                                <Separator orientation="vertical" className="w-[2px] h-[60px] text-accent"/>
                            </div>
                            <h2 className="text-4xl text-accent font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            <div className="flex gap-1">
                                <p className="font-semibold">Category:</p>
                                {project.category}
                            </div>
                            <p className="text-white/60 xl:mr-5">
                                {project.description}
                            </p>
                            <ul className="flex gap-4">
                                <div className="flex flex-col justify-start items-start gap-2">
                                    <div className="font-semibold">
                                        Tech Stack:{" "}
                                    </div>
                                    <Social
                                        containerStyles="flex gap-3 xl:gap-6"
                                        iconStyles="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] border border-accent rounded-full flex justify-center items-center text-accent text-2xl hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                        data={project.stack}
                                    />
                                </div>
                            </ul>
                            <div className="flex items-center gap-4">
                                <Link href={project.live} target="_blank" aria-disabled={project.live=="" ? true : false}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub Repo</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="h-[320px] xl:h-[520px] mb-2 xl:mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[300px] xl:h-[460px] relative group flex justify-center items-center bg-transparent">
                                            <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                            <div className="relative w-full h-full border border-accent/20 shadow-xl">
                                                <Image
                                                    src={project.image}
                                                    alt=""
                                                    fill={true}
                                                    sizes="(min-height: 300px)"
                                                    className="object-contain"
                                                    loading="eager" priority={true}
                                                ></Image>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl-justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] rounded-full flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Work;
