import { Component, OnInit } from '@angular/core';
import { BikesService } from '../bikes.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.styl']
})
export class CommentsComponent implements OnInit {
  commentsList: any[];
  searchForm = this.formBuilder.group({
    postId: ['']
  });
  existData: boolean = false;
  constructor(private bikesService: BikesService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bikesService.queryComments()
    .subscribe(res => {
      console.log('comments ',res);
      this.commentsList = res;
    }, err => console.log(err));
  }

  searchComment(): void {
    console.log('Search ', this.searchForm.value);
    this.bikesService.findCommentsByPostId(this.searchForm.value.postId)
    .subscribe(res => {
      console.log('comments Finds ',  res);
      this.commentsList = res;
      if(this.commentsList.length > 0 ) {
        this.existData = false;
      } else {
        this.existData = true;
      }
    }, err => console.log(err));
  }
}
