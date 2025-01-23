import { usePostSocialAction } from '@/contexts/PostSocialActionProvider';
import Button from '@/shared/Button';
import Input from '@/shared/Input';
import React from 'react';
import { GoCommentDiscussion } from 'react-icons/go';


type PostCommentSectionProps = {
    postId: string
}

export const PostCommentSection = ({ postId }: PostCommentSectionProps) => {
    const { openCommentPostId } = usePostSocialAction();
    if (!openCommentPostId || openCommentPostId !== postId) return null;
    return (
        <div className={`mt-8 flex items-center gap-2 $`}>
            <GoCommentDiscussion className='text-3xl' />
            <Input
                placeholder='Add a comment'
                className='border-none outline-transparent focus:ring-0 '
                autoFocus
            />
            <Button className='w-5 text-blue-400 font-semibold'>
                Post
            </Button>
        </div>
    );
};