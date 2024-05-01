import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FeverTokens() {
  const tasks = [
    {
      text: "Developed a decentralized application for hotel room bookings on the Polygon mainnet, utilizing Next.js and Solidity.",
      keywords: ["Next.js", "Solidity"],
    },
    {
      text: "Implemented NFT generation for each booking, incorporating the hotels' logo into the NFT.",
      keywords: ["NFT generation", "NFT"],
    },
    {
      text: "Enabled users to make bookings for specific dates, with each booking resulting in the creation of a unique NFT",
      keywords: ["unique NFT"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Blockchain Developer{" "}
            <span className="text-AAsecondary">@ web3</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jan 2024 - Present
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://koinon.io/", "_blank")}
          >
            https://koinon.io
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
