import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovielistService } from '../movielist.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input()
  public movie: Movie;

  constructor(private movielistService: MovielistService) { }

  ngOnInit() {
  }

  public delete(): void {
    this.movielistService.delete(this.movie);
  }

}
