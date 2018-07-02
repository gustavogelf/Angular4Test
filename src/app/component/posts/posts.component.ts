import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor (private dataService: DataService) {}

  delete(post) {
    post.deleting = true;
    this
    .dataService
    .deletePost(post._id)
    .subscribe((response: Post) => {
      this.posts = this.posts.filter((value) => {
        return response._id !== value._id;
      });
    });
    return false;
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

}

interface Post {
  _id: string,
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
