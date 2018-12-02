export interface IsLogged {
  user?: {
    exp: Number
    iat: Number
    userId: String
    username: String
  };
  response?: String;
  message?: String;
}
