import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`
  // <h1>This is just for reference</h1>
  // `,
  //This is the othr way to define a template with the code itself where the code and its view are on same page
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myLTI';
}
