import { Component, OnInit, DoCheck } from '@angular/core';
import { Movie } from '../movie';
import { MovielistService } from '../movielist.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss'],
})
export class MovielistComponent implements OnInit, DoCheck {

  public movies: Movie[] = [];

  constructor(private movielistService: MovielistService) {

  }

  ngOnInit() {
  }

  ngDoCheck() {
    const newMovies = this.movielistService.movies;

    if (newMovies !== this.movies) {
      this.movies = newMovies;
    }
  }

}
