import { Component, OnInit} from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "my-app",
  templateUrl:'./app.component.xml',
  styleUrls: ['styles/login-common.css','styles/login.css']
})
export class AppComponent {

  constructor(private _page : Page) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

}
