import { Component } from '@angular/core';
import { LazyDialogService } from './services/lazy-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public lazyDialog: LazyDialogService) {}
}
