export interface Movies {
  Search:       Movie[];
  totalResults: string;
  Response:     string;
}

export interface Movie {
  Title:  string;
  Year:   string;
  imdbID: string;
  Type:   Type;
  Poster: string;
}

export enum Type {
  Movie = "movie",
}
