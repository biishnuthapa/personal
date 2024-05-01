import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
  const tasks = [
    {
      text: "Assisted in the planning and implementation of optical fiber transmission systems",
      keywords: ["optical fiber"],
    },
    {
      text: "Contributed to the optimization of network performance and reliability.",
      keywords: ["network performance"],
    },
    {
      text: "Spearheaded the installation and meticulous configuration of optical fiber cables, connectors, and associated equipment. Ensured precise alignment and termination of fiber connections, guaranteeing optimal signal transmission.",
      keywords: [],
    },
  ];

 return (
   <>
     <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
       <div className="flex flex-col spacey-y-2">
         {/* Title */}
         <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
           Engineer <span className="text-AAsecondary">@ Optical Fiber</span>
         </span>
         {/* Date */}
         <span className="font-mono text-xs text-gray-500">Nov - Jan 2024</span>
         <span
           className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
           style={{ fontSize: "0.6rem" }}
           // set on click to open the website
           onClick={() => window.open("https://websurfer.com.np/", "_blank")}
         >
           www.websurfer.com.np
         </span>
       </div>
       <div className="flex flex-col space-y-4 sm:text-sm text-xs">
         {/* Tasks Description 1 */}
         {tasks.map((item, index) => {
           return (
             <div key={index} className="flex flex-row space-x-1">
               <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
               <span
                 className="text-gray-500 sm:text-sm text-xs"
                 dangerouslySetInnerHTML={{
                   __html: getTasksTextWithHighlightedKeyword(
                     item.text,
                     item.keywords
                   ),
                 }}
               ></span>
             </div>
           );
         })}
       </div>
     </div>
   </>
 );
}
