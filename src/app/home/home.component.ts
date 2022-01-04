import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelloService } from '../service/hello.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public hello: HelloService) {}

  ngOnInit(): void {
  }

}
