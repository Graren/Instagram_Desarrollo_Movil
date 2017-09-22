import { Component } from '@angular/core';

@Component({
  selector: 'logo-title',
  templateUrl: 'title.html'
})
export class PapoTitle {

  title: string;
  constructor() {
    this.title = "Daolpuelif"
  }

}
