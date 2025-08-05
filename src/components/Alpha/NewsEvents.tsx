import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: "",
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  { 
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: "",
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: "",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: "",
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

function NewsEvents() {
  return (
    <div className='max-w-screen px-[5vw] py-20'>
        <div className="pb-1">
            <h2 className="text-center text-3xl font-bold font-exo relative z-10">
            News & Events
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-42 h-[3px] bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 rounded"></div>
        </div>
        <p className="text-center text-lg mt-4 font-light font-exo">
            Stay updated with the latest news and events in the construction and engineering industry.
        </p>
        {/* Placeholder for news and events content */}
        <div className="mt-8 text-center">
            <BentoGrid className="max-w-[1300px] mx-auto md:auto-rows-[40rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                    />
                ))}
            </BentoGrid>
        </div>
    </div>
  )
}

export default NewsEvents