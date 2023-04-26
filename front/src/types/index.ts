export type PostsType = IPost[];

export interface IPost {
  id: number;
  title: string;
  content: string;
  comments: IComment[] | [];
}

export interface IComment {
  id: number;
  content: string;
}
