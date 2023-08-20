export interface IReview{
  id: number,
  showId: number,
  username: string,
  rating: number,
  comment: string,
  isSpoiler: boolean,
  upvotes: number,
  downvotes: number
}
