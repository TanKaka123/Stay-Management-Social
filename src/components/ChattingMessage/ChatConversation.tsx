"use client";

import React, { Dispatch, SetStateAction } from "react";
import { FaSmileBeam } from "react-icons/fa";
import { HiMiniMicrophone } from "react-icons/hi2";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";

type ChattingAuthor = {
  id: string;
  name: string;
};
type ChattingMessage = {
  type: "message";
  message: string;
  author: ChattingAuthor;
  createdAt: string;
};
type ChatttingTime = {
  type: "time";
  time: string;
};

export type MessageConversation = ChatttingTime | ChattingMessage;

export const CURRENT_USER_ID = "6";
export const MOCK_MESSSAGE_CONVERSATION: MessageConversation[] = [
  {
    type: "time",
    time: "February 20, 2018",
  },
  {
    type: "message",
    message: "Hi everyone! Glad you could join! I am making a new movie.",
    createdAt: "12:45 pm",
    author: {
      id: "1",
      name: "Sylverter Stallone",
    },
  },
  {
    type: "message",
    message: "Hi all! I have one question for the movie",
    createdAt: "12:46 pm",
    author: {
      id: "4",
      name: "Tom Cruise",
    },
  },
  {
    type: "message",
    message: "Again?",
    createdAt: "12:46 pm",
    author: {
      id: "3",
      name: "Harrison Ford",
    },
  },
  {
    type: "message",
    message: "Is Andrés coming for this one?",
    createdAt: "12:46 pm",
    author: {
      id: "2",
      name: "Russell Crowe",
    },
  },
  {
    type: "message",
    message: "He is. Just invited him to join.",
    createdAt: "12:46 pm",
    author: {
      id: "1",
      name: "Sylverter Stallone",
    },
  },
  {
    type: "message",
    message: "Hi guys.",
    createdAt: "12:46 pm",
    author: {
      id: "6",
      name: "Andrés Onana",
    },
  },
  {
    type: "message",
    message: "Count me in",
    createdAt: "12:46 pm",
    author: {
      id: "6",
      name: "Andrés Onana",
    },
  },
  {
    type: "message",
    message: "Get Andrés on this movie ASAP!",
    createdAt: "12:46 pm",
    author: {
      id: "4",
      name: "Tom Cruise",
    },
  },
];

type ChartConversationProps = {
  messages: MessageConversation[];
  onSendMessage: () => void;
  inputMessage: string;
  setInputMessage: Dispatch<SetStateAction<string>>;
};

export const ChatConversation = ({
  messages,
  onSendMessage,
  inputMessage,
  setInputMessage,
}: ChartConversationProps) => {
  const messageConversationRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <React.Fragment>
      {/* <!-- Right --> */}
      <div className="w-3/4 border-0 border-l-[1px] dark:border-neutral-700 flex flex-col">
        {/* <!-- Header --> */}
        <div className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
          <div className="flex items-center">
            <div>
              <img
                className="w-10 h-10 rounded-full"
                src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
              />
            </div>
            <div className="ml-4">
              <p className="text-grey-darkest">New Movie! Expendables 4</p>
              <p className="text-grey-darker text-xs mt-1">
                Andrés, Tom, Harrison, Arnold, Sylvester
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="cursor-pointer">
              <CiSearch className="text-xl" />
            </div>
            <div className="cursor-pointer">
              <HiOutlineDotsVertical className="text-xl" />
            </div>
          </div>
        </div>

        {/* <!-- Messages --> */}
        <div
          className="flex-1 overflow-auto bg-[#F8FAFC] dark:bg-[#1F1F1F]"
          ref={messageConversationRef}
        >
          <div className="py-2 px-3">
            {/* WARNING */}
            <div className="flex justify-center mb-4">
              <div className="rounded py-2 px-4 bg-[#FCF4CB]">
                <p className="text-xs text-black">
                  Messages to this chat and calls are now secured with
                  end-to-end encryption. Tap for more info.
                </p>
              </div>
            </div>
            {/* MESSAGE SECTION */}
            {messages.map((item) => {
              if (item.type === "time") {
                return (
                  <div className="flex justify-center mb-2">
                    <div className="rounded py-2 px-4 bg-[#DDECF2]">
                      <p className="text-sm uppercase text-black">
                        {item.time}
                      </p>
                    </div>
                  </div>
                );
              }
              const isCurrentUser = CURRENT_USER_ID === item.author.id;
              return (
                <div
                  className={`flex mb-2 ${isCurrentUser ? "justify-end" : ""}`}
                >
                  <div
                    className={`rounded-2xl 
                        py-2 px-3 
                        border-[1px] 
                        ${isCurrentUser ? "bg-[#4F46E5]" : "bg-[#FFFFFF]"}
                        border-[#E2E8F0] 
                        dark:${isCurrentUser ? "bg-[#ADADAD]" : "bg-[#4C4C4C]"}
                        dark:border-transparent`}
                  >
                    <p
                      className={`text-sm ${
                        isCurrentUser ? "text-white" : "text-black"
                      } 
                          dark:${isCurrentUser ? "text-black" : "text-white"}`}
                    >
                      {item.author?.name}
                    </p>
                    <p
                      className={`text-sm mt-1 ${
                        isCurrentUser ? "text-white" : "text-black"
                      } dark:${isCurrentUser ? "text-black" : "text-white"}`}
                    >
                      {item.message}
                    </p>
                    <p
                      className={`text-right text-xs ${
                        isCurrentUser ? "text-white" : "text-black"
                      } mt-1 
                          dark:${isCurrentUser ? "text-black" : "text-white"}
                          `}
                    >
                      {item.createdAt}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <!-- Input --> */}
        <div className="bg-grey-lighter px-4 py-4 flex items-center">
          <div>
            <FaSmileBeam className="text-[#666767] dark:text-white text-2xl" />
          </div>
          <div className="flex-1 mx-4">
            <input
              className="w-full border rounded-full px-2 py-2 dark:text-black"
              type="text"
              placeholder="Type a message"
              value={inputMessage}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSendMessage();
                  // Move to bottom
                  setTimeout(() => {
                    if (messageConversationRef.current) {
                      messageConversationRef.current.scrollTo({
                        top: messageConversationRef.current.scrollHeight,
                        behavior: "smooth",
                      });
                    }
                  }, 100);
                }
              }}
              onChange={(e) => setInputMessage(e.target.value)}
            />
          </div>
          <HiMiniMicrophone className="text-[#666767] dark:text-white text-2xl" />
        </div>
      </div>
    </React.Fragment>
  );
};
