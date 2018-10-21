import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovielistService {

  public get movies(): Movie[] {
    return this._movies;
  }

  private _movies: Movie[];

  constructor() {
    this._movies = [];
  }

  public add(movie: Movie): void {
    this._movies.push(movie);
  }

  public delete(movie: Movie): void {
    this._movies = this._movies.filter( x => x !== movie );
  }

}
