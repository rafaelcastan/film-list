import { MovieList } from "../models/movies.models";

export function responseToMovieList(response: any): MovieList {
  return {
        adult: response.adult,
        backImage: response.backdrop_path,
        genreId: response.genre_ids,
        id: response.id,
        originalLanguage: response.original_language,
        originalTitle: response.original_title,
        overview: response.overview,
        popularity: response.popularity,
        posterImage: response.poster_path,
        releaseDate: response.release_date,
        title: response.title,
        haveVideo: response.video,
        score:response.vote_average,
        scoreVote: response.vote_count,
    }
  }