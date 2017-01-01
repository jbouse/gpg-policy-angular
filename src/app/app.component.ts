import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var CryptoJS:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title:        string = "GnuPG Key Policy Manager";
  isDarkTheme:  boolean = false;
}
