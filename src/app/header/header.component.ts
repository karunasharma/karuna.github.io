import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
	
	
  constructor() {
	this.menus =[{name : 'home', path :'/home' },{name : 'main' path :'/main'},{name : 'about' path :'/about'},{name : 'contact' path :'/contact'}] }

  ngOnInit() {
  }

}
