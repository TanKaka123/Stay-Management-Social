import React from 'react';

type PostMediaProps = {
  postImage: string
}

export const PostMedia = ({ postImage }: PostMediaProps) => {
  return (
    <div>
        <img className='w-full h-auto max-h-96 object-cover' src={postImage} alt='image post'/>
    </div>
  );
};