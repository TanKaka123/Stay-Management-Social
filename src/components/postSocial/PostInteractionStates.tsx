import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { GoComment } from 'react-icons/go';
import { RiShareCircleLine } from 'react-icons/ri';

type PostInteractionStatesProps = {
    likedCount: number
}

export const PostInteractionStates = ({likedCount  }: PostInteractionStatesProps) => {
    return (
        <p className='font-medium text-xs mb-4'>
            {likedCount} likes
        </p>
    );
};