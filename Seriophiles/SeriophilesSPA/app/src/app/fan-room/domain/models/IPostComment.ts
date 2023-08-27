export interface IPostComment{
  "id": number,
  "postId"?g: number,
  "username": string;
  "comment": string;
  "upvotes": number;
  "downvotes": number;
}
