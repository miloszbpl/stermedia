import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';

@Component({
  selector: 'app-post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.css']
})
export class PostViewerComponent implements OnInit {

  @Input('post') post : Post = new Post();

  constructor() { }

  ngOnInit(): void {
  }

}
