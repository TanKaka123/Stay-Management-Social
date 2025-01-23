"use client";
import { DEMO_POST_SOCIAL } from "@/data/postsSocial";
import React from "react";
import { PostSocialItemRender } from "./PostSocialItemRender";
import { PostSocialActionProvider } from "@/contexts/PostSocialActionProvider";
import { PostSocialDataType } from "@/data/types";
import { PostItemSkeleton } from "../skeleton/Post";

type PostSocialSectionProps = {};

const NUMBER_ITEM_PER_PAGE = 8;

export const PostSocialSection = ({ }: PostSocialSectionProps) => {
    const [postsSocialData, setPostsSocialData] = React.useState<PostSocialDataType[]>(
        DEMO_POST_SOCIAL.slice(0, NUMBER_ITEM_PER_PAGE)
    );
    const [hasMore, setHasMore] = React.useState(true);
    const [loading, setLoading] = React.useState(false); // Loading state
    const loader = React.useRef<HTMLDivElement | null>(null);

    const handleObserver = React.useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const target = entries[0];
            if (target.isIntersecting && hasMore && !loading) {
                setLoading(true); // Set loading to true
                setTimeout(() => {
                    setPostsSocialData((prev) => {
                        const nextPosts = DEMO_POST_SOCIAL.slice(0, prev.length + NUMBER_ITEM_PER_PAGE);
                        if (nextPosts.length === prev.length) {
                            setHasMore(false);
                        }
                        return nextPosts;
                    });
                    setLoading(false); 
                }, 1000);
            }
        },
        [hasMore, loading]
    );

    React.useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0,
        };

        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);

        return () => {
            if (loader.current) observer.unobserve(loader.current);
        };
    }, [handleObserver]);

    return (
        <div>
            <PostSocialActionProvider postsSocialData={postsSocialData} setPostsSocialData={setPostsSocialData}>
                <>
                    <div className="flex flex-col gap-4">
                        {postsSocialData.map((postSocialItem, index) => (
                            <PostSocialItemRender key={index} postSocialItem={postSocialItem} index={index} />
                        ))}
                    </div>
                    <div ref={loader} className="loader" />
                    {hasMore && (
                        loading && (
                            <div className="flex flex-col gap-4 mt-4">
                                <PostItemSkeleton />
                                <PostItemSkeleton />
                                <PostItemSkeleton />
                            </div>
                        )
                    )}
                </>
            </PostSocialActionProvider>
        </div>
    );
};
