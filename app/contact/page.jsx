"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { info } from "@/lib/utils";


const Contact = () => {
    const [state, handleSubmit, reset] = useForm("mjkblwyo");

    if (state.succeeded) {
        return (
            <div className="py-6">
                <div className="container mx-auto pt-10 xl:w-[50%]">
                    <div className="flex flex-col justify-center items-center h-[500px] bg-[#27272c] border border-accent/60 rounded-xl gap-[50px]">
                        <h1 className="text-xl xl:text-3xl font-semibold text-accent">
                        Thank you for reaching out!
                        </h1>
                        <p className="w-[80%]">
                        Your message has been successfully sent. I will review it and get back to you as soon as possible. In the meantime, feel free to explore the rest of my portfolio or connect with me on <Link className="text-accent font-semibold" href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target="_blank">LinkedIn</Link>, <Link className="text-accent font-semibold" href={process.env.NEXT_PUBLIC_GITHUB_LINK} target="_blank">GitHub</Link> or check out my photography work on <Link className="text-accent font-semibold" href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK} target="_blank">Instagram</Link>.</p>
                        <Button onClick={reset}>
                            Click to send another mail
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                            onSubmit={handleSubmit}
                            method="POST"
                        >
                            <h3 className="text-4xl text-accent">
                                Let's Work Together
                            </h3>
                            <p className="text-white/60">
                                If you're interested in collaborating or have an
                                opportunity that aligns with my expertise, I'd
                                love to hear from you! Whether you’re a
                                potential employer, client, or just someone with
                                a question, feel free to drop me a message.
                                Let’s connect and explore how we can work
                                together to create something impactful.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    id="firstname"
                                    type="firstname"
                                    name="firstname"
                                    placeholder="Firstname"
                                    required
                                />
                                <Input
                                    id="lastname"
                                    type="lastname"
                                    name="lastname"
                                    placeholder="Lastname"
                                    required
                                />
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <Input
                                    id="phone"
                                    type="phone"
                                    name="phone"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <Input
                                className=""
                                id="emailsubject"
                                type="emailsubject"
                                name="emailsubject"
                                placeholder="Email Subject"
                                required
                            />
                            <Textarea
                                id="emailbody"
                                name="emailbody"
                                className="h-[150px] border"
                                placeholder="Type your message here."
                                required
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />

                            <Button
                                size="md"
                                className="max-w-40"
                                disabled={state.submitting}
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="flex items-center gap-6"
                                    >
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">
                                                {item.title}
                                            </p>
                                            <h3 className="text-md xl:text-xl">
                                                {item.description}
                                            </h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
