export interface User{
  id: number ;
  firstName: string;
  lastName: string;
  userName: string;
  favouriteGenres? : string[];
  wishlist? : string[];
  reviews? : string[];
}
