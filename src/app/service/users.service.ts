import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetPostDto } from '../model/dto/get-post-dto.model';
import { GetUserDto } from '../model/dto/get-user-dto.model';
import { Post } from '../model/post.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl: string = environment.serverUrl + "users/";

  constructor(
    private httpClient: HttpClient
  ) { }


  /**
   * Provides the collection of all avaialble users
   * @returns 
   */
  getAll() : Observable<GetUserDto[]> {
    return this.httpClient.get<GetUserDto[]> (this.apiUrl);
  }

  getOne(userId : number): Observable<GetUserDto>{
    return this.httpClient.get<GetUserDto> (this.apiUrl + userId);
  }

  getPosts(userId : number): Observable<GetPostDto[]>{
    return this.httpClient.get<GetPostDto[]> (this.apiUrl + userId + "/posts");
  }

}
