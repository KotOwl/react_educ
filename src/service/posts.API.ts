import {IPosts} from "../models/IPosts.ts";

const fetchPosts = async ():Promise<IPosts[]>=> {
    return await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
}

export {fetchPosts}