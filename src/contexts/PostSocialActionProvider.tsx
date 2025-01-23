import { PostSocialDataType } from '@/data/types';
import React from 'react';

type PostSocialAction = {
    onLikePost: (postId: string) => void;
    setOpenCommentPostId: (postId: undefined | string) => void;
    openCommentPostId: undefined | string;
}

const PostSocialActionContext = React.createContext<PostSocialAction>({} as PostSocialAction);

type PostSocialActionProviderProps = {
    children: React.ReactElement;
    postsSocialData: PostSocialDataType[];
    setPostsSocialData: React.Dispatch<React.SetStateAction<PostSocialDataType[]>>;
}

export const PostSocialActionProvider = ({ children, postsSocialData, setPostsSocialData }: PostSocialActionProviderProps) => {
    const [openCommentPostId, setOpenCommentPostId] = React.useState<string | undefined>(undefined);

    const onLikePost = React.useCallback(
        (postId: string) => {
            setPostsSocialData((prev) =>
                prev.map((post) =>
                    post.id === postId ? {
                        ...post,
                        isLiked: !post.isLiked,
                        likedCount: post.likedCount + (post.isLiked ? 1 : -1)
                    } : post
                )
            );
        },
        [setPostsSocialData]
    );


    const values = React.useMemo(() => ({
        onLikePost: onLikePost,
        setOpenCommentPostId,
        openCommentPostId
    }), [onLikePost, openCommentPostId, setOpenCommentPostId]);

    return (
        <PostSocialActionContext.Provider value={values}>
            {children}
        </PostSocialActionContext.Provider>
    );
};

export const usePostSocialAction = () => React.useContext(PostSocialActionContext);