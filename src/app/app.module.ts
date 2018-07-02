import { NgModule } from '@angular/core';
import { MatToolbarModule, MatProgressBarModule, MatIconModule, MatDividerModule, MatListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { PostsComponent } from './component/posts/posts.component';
import { HumanizedPipe } from './pipes/humanized.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HumanizedPipe
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    HttpClientModule,
    MatProgressBarModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
