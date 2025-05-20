import { Component } from '@angular/core';
import { fadeIn } from '@animations/fade-in.animation';

@Component({
  selector: 'app-blank-layout',
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss',
  standalone: false,
  animations: [fadeIn],
})
export class BlankLayoutComponent {}
