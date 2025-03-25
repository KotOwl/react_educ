import {post} from "../models/IPosts.ts";

export const postsAPI = async ():Promise<post[]>=>{

    const postFetch=await fetch('https://dummyjson.com/posts')
        .then(response=>response.json())

    return postFetch.posts
}