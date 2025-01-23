import { PostSocialDataType } from '@/data/types';
import React, { useEffect, useRef } from 'react';
import { PostHeader } from './PostHeader';
import { PostCaption } from './PostCaption';
import { PostContainer } from './PostContainer';
import { PostMedia } from './PostMedia';
import { PostInteractionStates } from './PostInteractionStates';
import { PostCommentSection } from './PostCommentSection';
import { PostAction } from './PostAction';

type PostSocialItemRenderProps = {
    postSocialItem: PostSocialDataType;
    index: number;
    onHeightUpdate?: (index: number, height: number) => void; // Callback for height update
};

const PADDING_POST_CONTAINER = 'px-4 py-2';

export const PostSocialItemRender = ({ postSocialItem, index, onHeightUpdate }: PostSocialItemRenderProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateHeight = () => {
            if (containerRef.current) {
                const height = containerRef.current.getBoundingClientRect().height;
                onHeightUpdate?.(index, height); // Pass height to the parent
            }
        };

        // Update height on mount
        updateHeight();

        // Optional: Handle window resize to recalculate height if needed
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, [index, onHeightUpdate]);

    return (
        <div ref={containerRef} >
        <PostContainer  indexItem={index}>
            <>
                <div className={`${PADDING_POST_CONTAINER}`}>
                    <PostHeader
                        authorName={postSocialItem.username}
                        authorAvatar={postSocialItem.profilePicture}
                        createdTime={postSocialItem.timestamp}
                    />
                </div>
                <PostMedia postImage={postSocialItem.postImage} />
                <div className={`${PADDING_POST_CONTAINER}`}>
                    <PostAction isLiked={postSocialItem.isLiked} postId={postSocialItem.id} />
                    <PostInteractionStates likedCount={postSocialItem.likedCount} />
                    <PostCaption captionContent={postSocialItem.caption} />
                    {postSocialItem.commentsCount > 0 && (
                        <p className="text-[#8E8E8E] cursor-pointer font-extralight text-xs mt-4">
                            View all {postSocialItem.commentsCount} comments
                        </p>
                    )}
                    <PostCommentSection postId={postSocialItem.id} />
                </div>
            </>
        </PostContainer>
        </div>
    );
};
