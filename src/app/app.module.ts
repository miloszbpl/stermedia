import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';
import { PostViewerComponent } from './components/post-viewer/post-viewer.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserOverviewComponent,
    PostViewerComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [{ provide: LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
