import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor (private dataService: DataService) {
    console.log('constructor posts ran..');
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      console.log(posts);
    });
  }

}

interface Post {
  objectID: string,
  title: string,
  url: string,
  author: string,
  points: number,
  num_comments: number,
  parent_id: number,
  story_id: number,
  story_url: string,
  story_text: string,
  story_title: string,
  comment_text: string,
  _tags: string[],
  _highlightResult: object,
  deleted_at: Date,
  created_at: Date,
  created_at_i: number,
}
