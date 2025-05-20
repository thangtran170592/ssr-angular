import { Component, OnInit } from '@angular/core';
import { fadeIn } from '@animations/fade-in.animation';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  standalone: false,
  animations: [fadeIn],
})
export class MainLayoutComponent implements OnInit {
  ngOnInit() {}
}
