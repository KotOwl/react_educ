import {IPosts} from "../../models/IPosts.ts";
import {FC} from "react";

type PostProps = {
    post:IPosts
};

export const PostComponent:FC<PostProps> = ({post}) => {
    return (
        <div className='border-5 p-6 m-8 rounded-full'>
            <h2 className='accent-red-100'>{post.userId}</h2>
            <p className='text-blue-300'>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};