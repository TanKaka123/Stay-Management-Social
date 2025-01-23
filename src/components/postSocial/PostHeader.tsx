"use client"
import Button from '@/shared/Button';
import MenuComponent from '@/shared/Menu';
import { formatDate } from '@/utils/formatDate';
import { MenuItem } from '@headlessui/react';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

type PostHeaderProps = {
  authorName: string
  authorAvatar: string
  createdTime: string
}

const PostToolBox = () => {
  return (
    <div>
      <BsThreeDots />
    </div>
  )
}

export const PostHeader = ({ authorName, authorAvatar, createdTime }: PostHeaderProps) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-4 items-center '>
        <img className='w-10 h-w-10 rounded-full' src={authorAvatar} alt='author_avatar' />
        <div>
          <p className='text-[0.9rem] font-medium'>{authorName}</p>
          <p className='text-[0.6rem] font-normal'>{formatDate(createdTime)}</p>
        </div>
      </div>
      <MenuComponent
        MenuButtonComponent={<PostToolBox />}
        MeneItemsComponent={<>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3">
              Delete
            </button>
          </MenuItem>
        </>}

      />
    </div>
  );
};