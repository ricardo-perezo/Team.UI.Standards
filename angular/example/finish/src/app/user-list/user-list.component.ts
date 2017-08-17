import { Component, OnInit } from '@angular/core';
import {SearchUsersService} from '../search-users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private searchService: SearchUsersService) { }

  ngOnInit() {
  }

  getGitUsers() {
    return this.searchService.getUsers();
  }

  getDetails(username: string) {
    this.searchService.getDetailsByUserName(username).subscribe(
      user => {
        this.searchService.setSelectedUser( user );
      },
      error => {
        this.searchService.setSelectedUser( {} );
        console.error(error);
      }
    )
}

}
