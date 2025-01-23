import React from "react";

export const PostItemSkeleton = () => (
    <div role="status" className="w-full animate-pulse">
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[200px] mb-2.5"></div>
        <div className="h-80 bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px] mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>
    </div>
);
