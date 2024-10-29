import Link from "next/link";

import { FaGithub, FaBloggerB } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Nog-boa",
    name: "Connect to my github",
  },
  {
    icon: <FaBloggerB />,
    path: "https://boanog.tistory.com/",
    name: "Connect to my tistory blog",
  },
];

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <div className={containerStyles}>
        {socials.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Link href={item.path} className={iconStyles}>
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default Social;
