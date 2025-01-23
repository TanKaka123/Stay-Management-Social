import { PostSocialItemRender } from "@/components/postSocial";
import { PostCommentSection } from "@/components/postSocial/PostCommentSection";
import { PostSocialSection } from "@/components/postSocial/PostSocialSection";
import { DEMO_POST_SOCIAL } from "@/data/postsSocial";
import React from "react";

const SocialPage = () => {
    return (
        <main className="nc-PageHome relative overflow-hidden pt-6 flex flex-col sm:flex-row gap-4 py-4 px-4 sm:px-[5vw]">
            {/* Left Sidebar */}
            <div className="hidden sm:block sm:w-[5vw] lg:w-[20vw] xl:w-[45vw]"></div>

            {/* Main Content */}
            <div className="w-full flex flex-col gap-4">
                <PostSocialSection />
            </div>

            {/* Right Sidebar */}
            <div className="hidden sm:block sm:w-[5vw] lg:w-[20vw] xl:w-[45vw]"></div>
        </main>
    );
};

export default SocialPage;
