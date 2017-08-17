import { Component, OnInit } from '@angular/core';
import {SearchUsersService} from '../search-users.service';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {
  private selectedUser: any;

  constructor(private searchService: SearchUsersService) { }

  ngOnInit() {
  }

  getGitUserDetail() {
    //console.log("UserDetail: ",this.searchService.getSelectedUser())
    return this.searchService.getSelectedUser();
  }

}
