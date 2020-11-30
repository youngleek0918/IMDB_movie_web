import {Person} from './person.model';

export class Movie {
  public id: number;
  public title: string;
  public original_language: string;
  public release_date: string;
  public overview: string;
  public popularity: number;
  public posterPath: string;
  public castList: Person[];
  public crewList: Person[];


  constructor(id: number, title: string, original_language: string, release_date: string, overview: string,
              popularity: number, posterPath: string, castList: Person[], crewList: Person[]) {
    this.id = id;
    this.title = title;
    this.original_language = original_language;
    this.release_date = release_date;
    this.overview = overview;
    this.popularity = popularity;
    this.posterPath = posterPath;
    this.castList = castList;
    this.crewList = crewList;
  }
}
