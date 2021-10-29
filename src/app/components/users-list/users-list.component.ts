import { Component, OnInit } from '@angular/core';
import { GetUserDto } from 'src/app/model/dto/get-user-dto.model';
import { User } from 'src/app/model/user.model';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  columns : string[]  = User.basicUserInfo;
  users : User[] = [];


  constructor(
    private usersSevice : UsersService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }


  getUsers(){
    this.usersSevice.getAll().subscribe(
      result=>{
        console.log(result )
        this.users = result.map(dto=> GetUserDto.toUser(dto)) ;
      }
    )
  }

}
