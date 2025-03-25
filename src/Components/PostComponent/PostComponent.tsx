import {FC} from "react";
import {post} from "../../models/IPosts.ts";

type postProp = {post:post};
export const PostComponent:FC<postProp> = ({post}) => {
    return (
        <div>
            <h3>{post.body}</h3>
            <p>{post.title}</p>
            {/*<p>*/}
            {/*    {*/}
            {/*        post.tags.map(tag => )*/}
            {/*    }*/}
            {/*</p>*/}
        </div>
    );
};