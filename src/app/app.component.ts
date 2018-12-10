import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userFilter = "";
  users = [
    {
     id:1,
     name:"Ram",
     location:"chennai"
    },
    {
     id:2,
     name:"Krish",
     location:"coimbatore"
    },
    {
     id:3,
     name:"Karna",
     location:"madurai"
    }
]
}
