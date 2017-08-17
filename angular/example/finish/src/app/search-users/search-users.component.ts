import { Component, OnInit } from '@angular/core';
import {SearchUsersService} from '../search-users.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  place: string;
  language: string;

  constructor(private searchService: SearchUsersService) { }

  ngOnInit() {
  }

  search(place:string, language: string) {
    this.place = place;
    this.language = language;

    this.searchService.getUsersByPlaceAndLanguage(place, language).subscribe(
        users => {
          this.searchService.setUsers( users );
        },
        error => {
          this.searchService.setUsers( [] );
        }
      )
  }

}
