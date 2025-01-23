import React from 'react';

type PostContainerProps = {
    children: React.ReactElement;
    indexItem: number
}

export const PostContainer = ({ children, indexItem }: PostContainerProps) => {
    return (
        <div className={`border-solid border-[#EFEFEF] border-[1px] rounded-lg dark:border-zinc-600`}>
            {children}
        </div>
    );
};