import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
    SiTailwindcss,
    SiNextdotjs,
    SiPandas,
    SiNumpy,
    SiTensorflow,
    SiPytorch,
    SiAmazonwebservices,
    SiGooglecloud,
    SiCoursera,
    // SiIbm,
    SiDocker,
    SiGit,
    SiCplusplus,
    SiSpring,
    SiPostgresql,
    SiMysql,
    SiFlask,
    SiStreamlit,
    SiScikitlearn,
    SiKeras,
    SiMongodb,
    SiPostman,
    SiLightning,
    SiJavascript,
    SiOllama,
    SiUv,
    SiLangchain
} from "react-icons/si";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
    FaJava,
    FaEnvelope,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaHackerrank,
    FaInstagram,
} from "react-icons/fa";

import {
    GoOrganization,
    GoMortarBoard,
    GoStack,
    GoPerson,
    GoLog,
} from "react-icons/go";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";
import { PiCertificateLight } from "react-icons/pi";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const stats = [
    {
        num: 4,
        text: "Years of Experience",
    },
    {
        num: 20,
        text: "Certifications",
    },
    {
        num: 8,
        text: "Technology Proficiency",
    },
    {
        num: 500,
        text: "Code Commits",
    },
];

export const info = [
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: process.env.NEXT_PUBLIC_CONTACT_LOCATION,
    },
];

export const about = {
    icon: <GoPerson />,
    title: "About Me",
    description:
        "I’m a dedicated software engineer with a strong foundation in both full stack development and machine learning. My journey in tech is driven by a desire to solve complex problems and continuously learn new technologies. Here, you'll find more about my background details.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Nidarsh Nithyananda",
        },
        {
            fieldName: "Experience",
            fieldValue: "4+ Years",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Hindi, Kannada, Tulu",
        },
    ],
};

export const experience = {
    icon: <GoOrganization />,
    title: "Experience",
    description:
        "Over the years, I’ve gained valuable experience across various roles, from software engineering to research, contributing to diverse projects and honing my skills. This section highlights my professional journey and the impact I’ve made along the way.",
    items: [
        {
            company: "Opteamix Technology Solutions",
            position: "Senior Software Engineer",
            duration: "2025 - Present",
            type: "Full Time",
            location: "Bengaluru, India",
            logo: "/assets/resume/opteamix_logo.png",
        },
        {
            company: "Thaniya Technologies",
            position: "Software Engineer",
            duration: "2022 - 2024",
            type: "Freelance",
            location: "Remote",
            logo: "/assets/resume/thaniya_logo.png",
        },
        {
            company: "Tech Mahindra",
            position: "Software Engineer",
            duration: "2021 - 2022",
            type: "Full Time",
            location: "Pune, India",
            logo: "/assets/resume/techm_logo.png",
        },
        {
            company: "IBM",
            position: "Application Programmer",
            duration: "2019 - 2020",
            type: "Full Time",
            location: "Bengaluru, India",
            logo: "/assets/resume/ibm_logo.png",
        },
        {
            company: "Sahyadri College of Engineering & Management",
            position: "Research Assistant",
            duration: "2018 - 2019",
            type: "Part Time",
            location: "Mangaluru, India",
            logo: "/assets/resume/sahyadri_logo.svg",
        },
    ],
};

export const education = {
    icon: <GoMortarBoard />,
    title: "Education",
    description:
        "My educational background has been instrumental in shaping my career. This section details my academic achievements, including my current pursuit of a Master’s in Computer Science, which complements my hands-on experience in the field.",
    items: [
        {
            institution: "University of Alabama at Birmingham",
            degree: "Master of Science",
            field: "Computer Science",
            duration: "2022 - 2024",
            grade: {
                type: "grade",
                score: "3.7",
                total: "4.0",
            },
            location: "United States",
        },
        {
            institution: "Sahyadri College of Engineering & Management",
            degree: "Bachelor of Engineering",
            field: "Computer Science & Engineering",
            duration: "2015 - 2019",
            grade: {
                type: "grade",
                score: "7.32",
                total: "10.0",
            },
            location: "India",
        },
        {
            institution: "St. Aloysius Pre University College",
            degree: "12th",
            field: "PCMC",
            duration: "2015",
            grade: {
                type: "percent",
                score: "89.67",
                total: "%",
            },
            location: "India",
        },
        {
            institution: "St. Aloysius High School",
            degree: "10th",
            field: "General",
            duration: "2013",
            grade: {
                type: "percent",
                score: "91.04",
                total: "%",
            },
            location: "India",
        },
    ],
};

export const skills = {
    icon: <GoStack />,
    title: "Skills",
    description:
        "I’ve developed a diverse skill set that spans full stack development, machine learning, cloud computing, and more. This section provides an overview of the technical and soft skills I bring to the table, demonstrating my ability to adapt and excel in different environments.",
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
            icon: <SiCplusplus />,
            name: "C++",
        },
        {
            icon: <SiLangchain />,
            name: "LangChain",
        },
        {
            icon: <SiAmazonwebservices />,
            name: "Amazon Web Services",
        },
        {
            icon: <VscAzure />,
            name: "Microsoft Azure",
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
            icon: <SiKeras />,
            name: "Keras",
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
            icon: <SiScikitlearn />,
            name: "Scikit-Learn",
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
        {
            icon: <SiSpring />,
            name: "Spring",
        },
        {
            icon: <SiMysql />,
            name: "MySQL",
        },
        {
            icon: <SiMongodb />,
            name: "Mongodb",
        },
        {
            icon: <SiPostgresql />,
            name: "Postresql",
        },
        {
            icon: <SiDocker />,
            name: "Docker",
        },
        {
            icon: <SiGit />,
            name: "Git",
        },
        {
            icon: <SiPostman />,
            name: "Postman",
        },
        {
            icon: <VscAzureDevops />,
            name: "Azure DevOps",
        }
    ],
};

export const certificates = {
    icon: <PiCertificateLight />,
    title: "Certifications",
    description:
        "My commitment to continuous learning is reflected in the certifications I’ve earned. These validate my expertise across domains like cloud computing and deep learning, equipping me to tackle complex challenges in the tech industry.",
    providers: [
        {
            name: "AWS",
            icon: <SiAmazonwebservices />,
            certs: [
                {
                    name: "AWS Certified Cloud Practitioner",
                    date: "May 2023",
                    link: "https://www.credly.com/badges/1711418a-619c-4398-928d-e6dba52315e7/linked_in_profile",
                },
            ],
        },
        {
            name: "Google Cloud Skill Boost",
            icon: <SiGooglecloud />,
            certs: [
                {
                    name: "Introduction to Generative AI",
                    date: "Jun 2023",
                    link: "https://www.cloudskillsboost.google/public_profiles/832c9f38-37e9-4637-b103-8743ea815d81/badges/3901241?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
                },
                {
                    name: "Introduction to Large Language Model",
                    date: "Jun 2023",
                    link: "https://www.cloudskillsboost.google/public_profiles/832c9f38-37e9-4637-b103-8743ea815d81/badges/3917275?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
                },
                {
                    name: "Introduction to Responsible AI",
                    date: "Jun 2023",
                    link: "https://www.cloudskillsboost.google/public_profiles/832c9f38-37e9-4637-b103-8743ea815d81/badges/3917364?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
                },
                {
                    name: "Generative AI Fundamentals",
                    date: "Jun 2023",
                    link: "https://www.cloudskillsboost.google/public_profiles/832c9f38-37e9-4637-b103-8743ea815d81/badges/3917414?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
                },
                {
                    name: "Introduction to Image Generation",
                    date: "Jun 2023",
                    link: "https://www.cloudskillsboost.google/public_profiles/832c9f38-37e9-4637-b103-8743ea815d81/badges/3918536?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
                },
                {
                    name: "Encoder - Decoder Architecture",
                    date: "Jun 2023",
                    link: "https://www.cloudskillsboost.google/public_profiles/832c9f38-37e9-4637-b103-8743ea815d81/badges/3927628?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
                },
                {
                    name: "Attention Mechanism",
                    date: "Jun 2023",
                    link: "https://www.cloudskillsboost.google/public_profiles/832c9f38-37e9-4637-b103-8743ea815d81/badges/3927697?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
                },
                {
                    name: "Transformer Models and Bert Model",
                    date: "Jun 2023",
                    link: "https://www.cloudskillsboost.google/public_profiles/832c9f38-37e9-4637-b103-8743ea815d81/badges/3928715?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
                },
                {
                    name: "Create Image Captioning Models",
                    date: "Jun 2023",
                    link: "https://www.cloudskillsboost.google/public_profiles/832c9f38-37e9-4637-b103-8743ea815d81/badges/3929020?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
                },
                {
                    name: "Introduction to Generative AI Studio",
                    date: "Jun 2023",
                    link: "https://www.cloudskillsboost.google/public_profiles/832c9f38-37e9-4637-b103-8743ea815d81/badges/3929156?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
                },
            ],
        },
        {
            name: "Coursera",
            icon: <SiCoursera />,
            certs: [
                {
                    name: "Image Super Resolution Using Autoencoders in Keras",
                    date: "Jun 2020",
                    link: "https://www.coursera.org/account/accomplishments/certificate/KFJ977E8PT7R",
                },
                {
                    name: "Deep Learning Specialization",
                    date: "Apr 2020",
                    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/S4RVEC9HD3SN",
                },
                {
                    name: "Sequence Models",
                    date: "Apr 2020",
                    link: "https://www.coursera.org/account/accomplishments/certificate/UD9EZSBZMTJ9",
                },
                {
                    name: "Convolutional Neural Networks",
                    date: "Apr 2020",
                    link: "https://www.coursera.org/account/accomplishments/certificate/3HGVG5XBEQ8N",
                },
                {
                    name: "Structuring Machine Learning Projects",
                    date: "Apr 2020",
                    link: "https://www.coursera.org/account/accomplishments/certificate/FTP3BC8DLZ5G",
                },
                {
                    name: "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
                    date: "Apr 2020",
                    link: "https://www.coursera.org/account/accomplishments/certificate/2UVZS4Y2YKQ8",
                },
                {
                    name: "Neural Networks and Deep Learning",
                    date: "Apr 2020",
                    link: "https://www.coursera.org/account/accomplishments/certificate/Q5A4LZQZUR59",
                },
            ],
        },
        {
            name: "IBM",
            icon: <SiCoursera />,
            certs: [
                {
                    name: "Advanced Data Science with IBM Specialization",
                    date: "Sep 2019",
                    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/6NWARJ9LDADC",
                },
                {
                    name: "Advanced Data Science Capstone",
                    date: "Sep 2019",
                    link: "https://www.credly.com/badges/7185d40b-e4d1-4f4f-9658-68fcf2bdd26a/linked_in_profile",
                },
                {
                    name: "Applied AI with Deep Learning",
                    date: "Aug 2019",
                    link: "https://www.youracclaim.com/badges/537dc92d-ce2e-4bd5-b16f-2fb7565960c2/linked_in_profile",
                },
                {
                    name: "Advanced Machine Learning and Signal Processing",
                    date: "Jul 2019",
                    link: "https://www.credly.com/badges/605ac28b-0f1f-41f8-ae3f-95a792734027/linked_in_profile",
                },
                {
                    name: "Fundamentals of Scalable Data Science",
                    date: "Jul 2019",
                    link: "https://www.credly.com/badges/b838cf4b-7a3a-45b4-a2a0-7b23e451b152/linked_in_profile",
                },
            ],
        },
    ],
};

export const publications = {
    icon: <GoLog />,
    title: "Publications",
    description:
        "I have had the opportunity to contribute to the tech community through research. Below is my published work. I'm passionate about sharing knowledge and advancing the field through ongoing learning and innovation.",
    articles: [
        {
            name: "Exploring the Performance of EEG Signal Classifiers for Alcoholism",
            book: "Advances in Artificial Intelligence and Data Engineering (AIDE 2019)",
            journal:
                "Advances in Intelligent Systems and Computing, vol 1133. Springer, Singapore.",
            link: "https://doi.org/10.1007/978-981-15-3514-7_12",
        },
    ],
};

export const services = [
    {
        title: "Generative AI",
        description:
            "I orchestrate autonomous agents that collaborate to reason, plan, and execute complex tasks, enabling scalable AI-driven automation using multi-agent workflows powered by LangChain and LangGraph. ",
        href: "",
    },
    {
        title: "Machine Learning",
        description:
            "I design and optimize machine learning models using TensorFlow, Keras, and PyTorch. From predictive modeling to natural language processing, I turn complex data into actionable insights, enhancing decision-making and driving innovation.",
        href: "",
    },
    {
        title: "Java Full Stack",
        description:
            "I develop robust full stack applications using Java, Spring Boot, and front-end technologies like React and JSP. My experience includes building secure and scalable solutions with microservices and RESTful APIs, ensuring high performance and reliability.",
        href: "",
    },
    {
        title: "Web Development",
        description:
            "I create dynamic web applications with a focus on efficiency and user experience. My expertise spans building responsive websites, developing RESTful APIs, and creating full-featured platforms that align with business objectives.",
        href: "",
    },
    {
        title: "Python Scripting",
        description:
            "I develop Python scripts to automate tasks and improve productivity. From data preprocessing to system monitoring and log analysis, my scripting solutions reduce manual effort and streamline processes, saving time and resources.",
        href: "",
    },
];

export const projects = [
    {
        category: "Generative AI (GenAI), Large Language Models (LLM's)",
        title: "Local RAG for PDFs using Ollama",
        description:
            "A command-line tool that enhances context-aware PDF interaction by leveraging local conversational AI-powered responses and efficient document search.",
        stack: [
            { name: "Python", icon: <FaPython /> },
            { name: "Ollama", icon: <SiOllama /> },
            { name: "uv", icon: <SiUv /> },
        ],
        image: "/assets/work/localrag.png",
        live:
            process.env.NEXT_PUBLIC_LOCALRAG_LINK == undefined
                ? ""
                : process.env.NEXT_PUBLIC_LOCALRAG_LINK,
        github: process.env.NEXT_PUBLIC_LOCALRAG_GITHUB,
    },
    {
        category: "Fullstack Web Development",
        title: "simplyShare",
        description:
            "A cloud-based file sharing solution designed for simplicity and security. Whether you're a professional collaborating on projects, a student sharing assignments, or a family organizing photos and documents, simplyShare makes file sharing effortless and secure.",
        stack: [
            { name: "Html 5", icon: <FaHtml5 /> },
            { name: "CSS 3", icon: <FaCss3 /> },
            { name: "Javascript", icon: <FaJs /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Flask", icon: <SiFlask /> },
            { name: "AWS", icon: <SiAmazonwebservices /> },
        ],
        image: "/assets/work/simplyshare.png",
        live:
            process.env.NEXT_PUBLIC_SIMPLYSHARE_LINK == undefined
                ? ""
                : process.env.NEXT_PUBLIC_SIMPLYSHARE_LINK,
        github: process.env.NEXT_PUBLIC_SIMPLYSHARE_GITHUB,
    },
    {
        category: "Deep Learning, Natural Language Processing",
        title: "Text Summarization on BBC News Corpus",
        description:
            "Implementation of text summarization techniques on the BBC News Corpus, using both extractive and abstractive approaches. The extractive method leverages the TextRank algorithm to select key sentences, while the abstractive method fine-tunes a T5 model to generate human-like summaries.",
        stack: [
            { name: "Python", icon: <FaPython /> },
            { name: "Pytorch", icon: <SiPytorch /> },
            { name: "Pytorch Lightning", icon: <SiLightning /> },
            { name: "Scikit-Learn", icon: <SiScikitlearn /> },
            { name: "Pandas", icon: <SiPandas /> },
            { name: "Numpy", icon: <SiNumpy /> },
        ],
        image: "/assets/work/nlptext.png",
        live:
            process.env.NEXT_PUBLIC_TEXT_NLP_LINK == undefined
                ? ""
                : process.env.NEXT_PUBLIC_TEXT_NLP_LINK,
        github: process.env.NEXT_PUBLIC_TEXT_NLP_GITHUB,
    },
    {
        category: "Machine Learning, Data Science",
        title: "Breast Cancer Prediction",
        description:
            "Streamlit application that leverages a machine learning model to predict whether a breast mass is benign or malignant based on measurements from a cytology, enabling real-time updates to the prediction.",
        stack: [
            { name: "Python", icon: <FaPython /> },
            { name: "Streamlit", icon: <SiStreamlit /> },
            { name: "Pandas", icon: <SiPandas /> },
            { name: "Numpy", icon: <SiNumpy /> },
            { name: "Scikit-Learn", icon: <SiScikitlearn /> },
        ],
        image: "/assets/work/breast_cancer.png",
        live:
            process.env.NEXT_PUBLIC_CANCER_PRED_LINK == undefined
                ? ""
                : process.env.NEXT_PUBLIC_CANCER_PRED_LINK,
        github: process.env.NEXT_PUBLIC_CANCER_PRED_GITHUB,
    },
    {
        category: "Machine Learning, Data Science",
        title: "Efficient Data Stream Anomaly Detection",
        description:
            "Streamlit application that demonstrates a real-time anomaly detection system for a simulated continuous data stream. The main objective is to detect anomalies (e.g., unusually high or low values) in real-time using different anomaly detection models.",
        stack: [
            { name: "Python", icon: <FaPython /> },
            { name: "Streamlit", icon: <SiStreamlit /> },
            { name: "Pandas", icon: <SiPandas /> },
            { name: "Numpy", icon: <SiNumpy /> },
            { name: "Scikit-Learn", icon: <SiScikitlearn /> },
        ],
        image: "/assets/work/anomaly_detection.png",
        live:
            process.env.NEXT_PUBLIC_ANOMALY_DET_LINK == undefined
                ? ""
                : process.env.NEXT_PUBLIC_ANOMALY_DET_LINK,
        github: process.env.NEXT_PUBLIC_ANOMALY_DET_GITHUB,
    },
    {
        category: "Web Development",
        title: "Portfolio",
        description:
            "Project built using Next.js and React.js for a modern, responsive user interface. The styling is crafted with Tailwind CSS for a clean, customizable design, and enhanced by the Shadcn library to incorporate sleek UI components. The website showcases my projects, skills, and experience, providing a seamless and engaging user experience.",
        stack: [
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "React", icon: <FaReact /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Javascript", icon: <SiJavascript /> },
        ],
        image: "/assets/work/portfolio.png",
        live:
            process.env.NEXT_PUBLIC_PORTFOLIO_LINK == undefined
                ? ""
                : process.env.NEXT_PUBLIC_PORTFOLIO_LINK,
        github: process.env.NEXT_PUBLIC_PORTFOLIO_GITHUB,
    },
];

export const socials = [
    {
        icon: <FaGithub />,
        path: process.env.NEXT_PUBLIC_GITHUB_LINK,
        name: "Github",
    },
    {
        icon: <FaLinkedin />,
        path: process.env.NEXT_PUBLIC_LINKEDIN_LINK,
        name: "Linkedin",
    },
    {
        icon: <FaHackerrank />,
        path: process.env.NEXT_PUBLIC_HACKERRANK_LINK,
        name: "Hackerrank",
    },
    {
        icon: <FaInstagram />,
        path: process.env.NEXT_PUBLIC_INSTAGRAM_LINK,
        name: "Instagram",
    },
];
