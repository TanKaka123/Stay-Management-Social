import { usePostSocialAction } from '@/contexts/PostSocialActionProvider';
import Button from '@/shared/Button';
import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { GoComment } from 'react-icons/go';
import { RiShareCircleLine } from 'react-icons/ri';

type PostActionProps = {
    isLiked: boolean;
    postId: string
}

export const PostAction = ({ isLiked, postId }: PostActionProps) => {
    const { onLikePost, setOpenCommentPostId } = usePostSocialAction();

    return (
        <div className='flex mb-3 mt-2 gap-4'>
            <div onClick={() => onLikePost(postId)}>
                {
                    isLiked ?
                        <BsHeart className='text-xl cursor-pointer' /> :
                        <BsHeartFill className='text-xl cursor-pointer text-red-500' />
                }
            </div>
            <div onClick={() => setOpenCommentPostId(postId)}>
                <GoComment className='text-xl cursor-pointer' />
            </div>
            <div >
                <RiShareCircleLine className='text-xl cursor-pointer' />
            </div>
        </div>
    );
};