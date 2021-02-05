export interface MovieList {
    adult: boolean;
    backImage: string;
    genreId: number[];
    id: number;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterImage: string;
    releaseDate: string;
    title: string;
    haveVideo: boolean;
    score:number;
    scoreVote: number;
}

export interface MovieListResults{
    results:Array<MovieList>;
    
}

export interface MovieDetailsModel{
    adult: boolean;
    backImage: string;
    collection:collection;
    budget:string;
    genres: genres[];
    homepage:string;
    id: number;
    imdb_id:string;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterImage: string;
    production_companies:companies[];
    production_countries:countries[];
    releaseDate: string;
    revenue:number;
    runtime:number;
    spoken_languages:spokenLanguages[];
    status:string;
    tagline:string;
    title: string;
    haveVideo: boolean;
    score:number;
    scoreVote: number;
}

export interface genres{
    id:number;
    name:string
}

export interface companies{
    id:number;
    image:string
}

export interface countries{
    iso:number;
    name:string
}

export interface spokenLanguages{
    englishName:string;
    iso:string;
    name:string;
}

export interface collection{
    englishName:string;
    iso:string;
    name:string;
}