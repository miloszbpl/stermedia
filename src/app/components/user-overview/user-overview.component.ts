import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GetPostDto } from 'src/app/model/dto/get-post-dto.model';
import { GetUserDto } from 'src/app/model/dto/get-user-dto.model';
import { Post } from 'src/app/model/post.model';
import { User } from 'src/app/model/user.model';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  user: User = new User();
  userAttributes: string[] = User.detailedUserInfo;
  posts: Post[] = [];
  showPosts : boolean = true;


  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.getUser(params['id']);
      this.getUsersPosts(params['id']);
    })

  }

  /**
   * Fetches user personal data
   * @param userId 
   */
  getUser(userId: number) {
    this.usersService.getOne(userId).subscribe(result => {
      this.user = GetUserDto.toUser(result);
      console.log(result)
      console.log('u', this.user)
    })
  }

  /**
   * Fetches all posts created by user with given id
   * @param userId 
   */
  getUsersPosts(userId: number) {
    this.usersService.getPosts(userId).subscribe(
      result => {
        this.posts = result.map(dto => GetPostDto.toPost(dto))
      }
    )
  }


}
