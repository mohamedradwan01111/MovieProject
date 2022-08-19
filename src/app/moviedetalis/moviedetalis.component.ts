import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
MoviesService
@Component({
  selector: 'app-moviedetalis',
  templateUrl: './moviedetalis.component.html',
  styleUrls: ['./moviedetalis.component.css']
})
export class MoviedetalisComponent implements OnInit {
  id:string='';
  movieDetalis:any={};
  imgPrefix:string ='https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) { 
  
  }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getMovieDetalis(this.id).subscribe((response)=>{
      this.movieDetalis =response;
    })
  }

}
