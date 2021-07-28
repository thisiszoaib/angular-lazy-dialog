import { Component, NgModule, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { YouTubePlayerModule } from '@angular/youtube-player';

let apiLoaded = false;

@Component({
  selector: 'app-my-video',
  templateUrl: './my-video.component.html',
  styleUrls: ['./my-video.component.css'],
})
export class MyVideoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (!apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }
}

@NgModule({
  declarations: [MyVideoComponent],
  imports: [YouTubePlayerModule, MatDialogModule],
})
export class MyVideoModule {}
