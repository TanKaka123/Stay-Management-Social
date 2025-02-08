import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";

const CONVERSATION_LIST = [
  {
    conversationName: "New Movie! Expendables 4",
    isGroup: true,
    lastMessage: {
      type: "message",
      message: "Get Andrés on this movie ASAP!",
      createdAt: "12:46 pm",
      author: {
        id: "4",
        name: "Tom Cruise",
        avatar:
          "https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg",
      },
    },
  },
  {
    conversationName: "Arnold Schwarzenegger",
    lastMessage: {
      type: "message",
      message: "I'll be back",
      createdAt: "12:46 pm",
      author: {
        id: "4",
        name: "Arnold Schwarzenegger",
        avatar:
          "https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg",
      },
    },
  },
];

export function ConversationList() {
  return (
    <React.Fragment>
      <div className="w-1/4  flex flex-col">
        {/* <!-- Header --> */}
        <div className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
          <h1 className="text-xl font-extrabold">Messages</h1>
          <div className="flex gap-3">
            <div className="p-3 rounded-full dark:bg-slate-800 bg-slate-100 cursor-pointer">
              <IoSearchOutline className="text-xl" />
            </div>
            <div className="p-3 rounded-full dark:bg-slate-800 bg-slate-100 cursor-pointer">
              <IoFilterOutline className="text-xl" />
            </div>
          </div>
        </div>

        {/* <!-- Conversation list --> */}
        <div className="bg-grey-lighter flex-1 overflow-auto">
          {CONVERSATION_LIST.map((item) => (
            <div className="px-3 flex items-center bg-grey-light cursor-pointer">
              <div>
                <img
                  className="h-12 w-12 rounded-full"
                  src={item.lastMessage.author.avatar}
                />
              </div>
              <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
                <div className="flex items-bottom justify-between">
                  <p className="text-grey-darkest">{item.conversationName}</p>
                  <p className="text-xs text-grey-darkest">
                    {item.lastMessage.createdAt}
                  </p>
                </div>
                <p className="text-grey-dark mt-1 text-sm">
                  {item.lastMessage.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
