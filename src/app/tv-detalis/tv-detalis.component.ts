import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-tv-detalis',
  templateUrl: './tv-detalis.component.html',
  styleUrls: ['./tv-detalis.component.css']
})
export class TvDetalisComponent implements OnInit {
  id:string='';
  tvDetalis:any={};
  imgPrefix:string ='https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getMovieDetalis(this.id).subscribe((response)=>{
      this.tvDetalis =response;
    })
  }

  }

