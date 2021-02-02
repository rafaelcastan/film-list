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
    [index: string]:any;
    results:Array<MovieList>;
    
}

