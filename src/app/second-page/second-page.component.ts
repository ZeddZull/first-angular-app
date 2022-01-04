import { Component, OnInit } from '@angular/core';
import { HelloService } from '../service/hello.service';
import { LoggerService } from "../service/logger.service";
@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor(public hello: HelloService, private logger: LoggerService) {}

  ngOnInit(): void {
    this.logger.log("second-page", "init");
  }

}
