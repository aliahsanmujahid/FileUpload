import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  response: any;
  user: any = {};

  public uploadFinished = (event) => {
    this.response = event;
  }
  onCreate(){
    this.user = {
      imgPath: this.response.dbPath
       }
  }
  public createImgPath = (serverPath: string) => {
    const path = `https://localhost:5001/${serverPath}`;
    console.log(path);
    return path;
  }

}
