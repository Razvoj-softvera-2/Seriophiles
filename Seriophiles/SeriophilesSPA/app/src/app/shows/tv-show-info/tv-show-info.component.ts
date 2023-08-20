import { Component } from '@angular/core';
import {ITvShow} from "../domain/models/tvShow";
import {TvShowFacadeService} from "../domain/application-services/tv-show-facade.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-tv-show-info',
  templateUrl: './tv-show-info.component.html',
  styleUrls: ['./tv-show-info.component.css']
})
export class TvShowInfoComponent {
  public tvShow: ITvShow | undefined;
  public addReviewForm: FormGroup;

  constructor(private  tvShowService: TvShowFacadeService, private router: Router, private formBuilder: FormBuilder) {
    this.tvShowService.getAllShows().subscribe((result)=>{
      const id = Number.parseInt(this.router.url.substring(this.router.url.lastIndexOf('/')+1));
      this.tvShow = result.find(res => res.id === id);
    });

    this.addReviewForm = this.formBuilder.group({
      rating : ['',[Validators.min(0), Validators.max(10)]],
      comment: ['', [Validators.minLength(4)]],
      spoiler: [true]
    });

  }

  public onSubmitAddReview(){
    const val1 = this.addReviewForm.get('rating')?.value;
    const val2 = isNaN(Number(this.addReviewForm.get('rating')?.value));
    const val3 = this.addReviewForm.controls['rating'].invalid;
    const val4 = this.addReviewForm.controls['comment'].invalid;
    if(val1 == "" || val2 || val3){
      window.alert('Rating must me a number between 0 and 10');
      return ;
    }

    if(val4){
      window.alert('Comment should be at least 4 characters long');
      return ;
    }

    const isSpoiler : boolean = this.addReviewForm.get('spoiler')?.value;
    const rating = Number(this.addReviewForm.get('rating')?.value);
    const comment = this.addReviewForm.get('comment')?.value;
    const showId = this.tvShow?.id;
    const username = 'ste1drag';
    const id = Math.floor(Math.random() * (100000000 + 1));
    if(showId){
      this.tvShowService.addReviewForTvShow({id,showId,username,rating,comment,isSpoiler,upvotes:0,downvotes:0});
    }
  }



  protected readonly Object = Object;
}
