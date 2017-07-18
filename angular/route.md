### Example of Route

``` html
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'user/:id',      component: UserDetailComponent },
  {
    path: 'users',
    component: UserListComponent,
    data: { title: 'Users List' }
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  ...
})
export class AppModule { }
```
