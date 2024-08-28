import Link from "next/link";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";


const Social = ({ containerStyles, iconStyles, data }) => {
    return (
        <div className={containerStyles}>
            {data.map((item, index) => {
                return (
                    <TooltipProvider key={index}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    key={index}
                                    href={item.hasOwnProperty("path")? item.path: ""}
                                    target={item.hasOwnProperty("path")? "_blank": ""}
                                    className={iconStyles}
                                >
                                    {item.icon}
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{item.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                );
            })}
        </div>
    );
};

export default Social;
