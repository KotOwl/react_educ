import {useEffect, useState} from "react";
import {fetchPosts} from "../../service/posts.API.ts";
import {IPosts} from "../../models/IPosts.ts";
import {PostComponent} from "../postComponent/PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPosts[]>([])
    useEffect(() => {
    fetchPosts().then(value => setPosts(value))
    }, []);
    return (
        <>
            {
                posts.map((value)=><PostComponent post={value} key={value.id}/>)
            }
        </>
    );
};