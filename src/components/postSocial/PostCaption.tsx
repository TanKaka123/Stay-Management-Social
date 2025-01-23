import React from 'react';

type PostCaptionProps = {
  captionContent: string
}

export const PostCaption = ({ captionContent }: PostCaptionProps) => {

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: captionContent }}
        className='text-sm'
      />
    </div>
  );
};