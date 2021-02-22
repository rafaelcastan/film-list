import { Component, Input, OnInit } from '@angular/core';
import { MovieDetailsModel } from 'src/app/shared/models/movies.models';

@Component({
  selector: 'mov-movie-detailed',
  templateUrl: './movie-detailed.component.html',
  styleUrls: ['./movie-detailed.component.css']
})
export class MovieDetailedComponent implements OnInit {

  @Input() MovieDetails!:MovieDetailsModel;
  @Input() languageSelected!:string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
