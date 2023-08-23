export interface IPostComment{
  "id": number,
  "postId": number,
  "username": string;
  "comment": string;
  "upvotes": number;
  "downvotes": number;
}
