import { MovieDetailsModel, MovieList } from "../models/movies.models";

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

  export function responseToMovieDetails(response: any): MovieDetailsModel {
    return {
      adult: response.adult,
      backImage: response.backdrop_path,
      collection:response.belongs_to_collection,
      budget:response.budget,
      genres:response.genres.map((d: any) =>({
        id: d.id,
        name:d.name
      })), 
      homepage:response.homepage,
      id: response.id,
      imdb_id:response.imdb_id,
      originalLanguage: response.original_language,
      originalTitle: response.original_title,
      overview: response.overview,
      popularity: response.popularity,
      posterImage: response.poster_path,
      production_companies:response.production_companies.map((d:any)=>({
        id: d.id,
        image:d.logo_path,
        name:d.name,
      })),
      production_countries:response.production_countries.map((d:any)=>({
        iso:d.iso_3166_1,
        name:d.name,
      })),
      releaseDate: response.release_date,
      revenue:response.revenue,
      runtime:response.runtime,
      spoken_languages:response.spoken_languages.map((d:any)=>({
        englishName:d.english_name,
        iso:d.iso_639_1,
        name:d.name,
      })),
      status:response.status,
      tagline:response.tagline,
      title: response.title,
      haveVideo: response.video,
      score:response.vote_average,
      scoreVote: response.vote_count,
      }
    }