import {useEffect, useState} from "react";
import {postsAPI} from "../../service/posts.API.ts";
import {post} from "../../models/IPosts.ts";
import {PostComponent} from "../PostComponent/PostComponent.tsx";

export const PostsComponent = () => {
    const [postsObject, setPostsObject] = useState<post[]>([])
    useEffect(() => {
        postsAPI().then(value => setPostsObject(value))
    }, []);
    return (
        <div>
            {
                postsObject.map(posts =><PostComponent key={posts.id} post={posts}/> )
            }
        </div>
    );
};