import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.css'
})
export class IconsComponent implements OnInit  {

  icons: string[] = [
    'fa fa-album', 'fa fa-arc', 'fa fa-arrow-left', 'fa fa-band-aid',
    'fa fa-car', 'fa fa-diamond', 'fa fa-door-lock', 'fa fa-eyedropper',
    'fa fa-female', 'fa fa-dumbbell', 'fa fa-hammer', 'fa fa-headphones',
    'fa fa-heart', 'fa fa-home', 'fa fa-leaf', 'fa fa-music',
    'fa fa-paint-brush', 'fa fa-paper-plane', 'fa fa-rocket', 'fa fa-star',
    'fa fa-user', 'fa fa-wrench'
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
