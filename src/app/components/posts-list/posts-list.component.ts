import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  @Input('posts') posts : Post[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
