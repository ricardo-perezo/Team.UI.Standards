## Example of Component
``` html

//template.html
<h2>User List</h2>

<p><i>Pick a user from the list</i></p>
<ul>
  <li *ngFor="let user of users" (click)="selectUser(user)">
    {{user.name}}
  </li>
</ul>

<user-detail *ngIf="selectedUser" [user]="selectedUser"></user-detail>

//softtekComponet.js
export class SofttekComponet implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.users = this.service.getUsers();
  }

  selectUser(user: User) { this.selectedUser = user; }
}
```
