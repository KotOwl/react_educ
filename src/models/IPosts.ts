export interface Reactions {
  likes: number;
  dislikes: number;
}

export interface post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}
export  interface postObject{
    posts:post[];
    total:number;
    skip:number;
    limit:number
}