import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

// import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  newPost = 'No Content';
  enteredTitle = '';
  enteredContent = '';
  // @Output() postCreated = new EventEmitter<Post>();
  constructor(public postsService: PostsService) { }

  ngOnInit() {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content
    // };
    // const post: Post = {
    //   title: this.enteredTitle,
    //   content: this.enteredContent
    // };
    // this.postCreated.emit(post);
  }
}
